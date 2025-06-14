import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Job } from "@/utils/types";
import { getCompanyNames, getJobsByCompany, getSlugifiedCompanyNames } from "@/utils/jobs";
import { deslugify, slugify } from "@/utils/slugify";
import Layout from "@/components/Layout";
import JobList from "@/components/sections/JobList";
import Spinner from "@/components/shared/Spinner";

interface CompanyProps {
    companyName: string
    jobs: Job[]
}

interface Params extends Record<string, string> {
    slug: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const paths = await getSlugifiedCompanyNames();

    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps<CompanyProps, Params> = async ({ params }) => {
    // If no match → 404
    if (!params?.slug) return { notFound: true };

    const companyNames = await getCompanyNames();

    let realName = deslugify(params.slug, companyNames);

    // If no match, see if the raw slug **exactly** matches a company name (case-insensitive)
    let redirectTo: string | undefined;

    if (!realName) {
        const raw = decodeURIComponent(params.slug).toLowerCase().replace(/[^a-z0-9]/g, "");
        const directMatch = companyNames.find(
            name => name.toLowerCase().replace(/[^a-z0-9]/g, "") === raw
        );
        if (directMatch) {
            realName = directMatch;
            // prepare a redirect to the slugified URL
            redirectTo = `/company/${slugify(directMatch)}`;
        }
    }

    // If still no match → 404
    if (!realName) return { notFound: true }

    // If we need to redirect (because user entered raw name):
    if (redirectTo) {
        return {
            redirect: {
                destination: redirectTo,
                permanent: false,    // use temporary so we can evolve slugs later
            },
        };
    }

    const jobs = await getJobsByCompany(realName);

    return {
        props: { jobs, companyName: realName },
        revalidate: 60
    };
}

export default function Company({ jobs, companyName }: CompanyProps) {
    // Check fallback state to show loading spinner
    const router = useRouter();

    if(router.isFallback) {
        return <Spinner />
    }

    return (
        <Layout>
            <section className="w-full md:px-8 lg:px-48 mt-8 mb-16">
                <h1 className="font-bold text-4xl mb-8 pb-8 border-b-2 border-custom-gray">{`Open Roles at ${companyName}`}</h1>
                <JobList jobs={jobs} infiniteScroll={false} />
            </section>
        </Layout>
    );
}
