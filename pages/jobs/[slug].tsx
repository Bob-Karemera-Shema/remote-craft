import Head from "next/head";
import Hero from "@/components/sections/Hero";
import Layout from "@/components/Layout";
import FeaturedJobs from "@/components/sections/FeaturedJobs";
import { ApiResponse, Job } from "@/utils/types";
import { getJobById, getJobIds } from "@/utils/jobs";
import { GetStaticPaths, GetStaticProps } from "next";

interface SingleJobProps {
  job: Job
}

interface Params extends Record<string, string> {
    id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const paths = await getJobIds();
    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps<SingleJobProps, Params> = async ({ params }) => {
    if(!params?.id) return { notFound: true };

    const job = await getJobById(Number(params.id));

    if(!job) return { notFound: true };
    
    return {
        props: {
            job,
        },
    };
}

export default function SingleJob({ job }: SingleJobProps) {
  return (
    <Layout>
      <Head>
        <title>RemoteCraft</title>
      </Head>
      <section className="w-full md:px-8 lg:px-48 mb-16">
      </section>
    </Layout>
  );
}
