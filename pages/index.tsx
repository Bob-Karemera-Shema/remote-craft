import { GetStaticProps } from "next";
import Hero from "@/components/sections/Hero";
import Layout from "@/components/Layout";
import JobList from "@/components/sections/JobList";
import { Job } from "@/utils/types";
import { getJobs } from "@/utils/jobs";
import { useRouter } from "next/router";
import Spinner from "@/components/shared/Spinner";

interface HomeProps {
  jobs: Job[]
}

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await getJobs();

  return {
    props: { jobs },
    revalidate: 30,
  }
}

export default function Home({ jobs }: HomeProps) {
  const router = useRouter();

  if(router.isFallback) {
    return <Spinner />
  }

  return (
    <Layout>
      <section className="w-full md:px-8 lg:px-48 mb-16">
        <Hero />
        <h2 className="font-bold text-2xl tracking-tighter mt-2.5 mb-8 px-6 md:px-0">Featured Jobs</h2>
        <JobList jobs={jobs} />
      </section>
    </Layout>
  );
}
