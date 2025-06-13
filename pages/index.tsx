import Head from "next/head";
import { GetStaticProps } from "next";
import Hero from "@/components/sections/Hero";
import Layout from "@/components/Layout";
import FeaturedJobs from "@/components/sections/FeaturedJobs";
import { ApiResponse, Job } from "@/utils/types";
import { getJobs } from "@/utils/jobs";

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
  return (
    <Layout>
      <Head>
        <title>RemoteCraft</title>
      </Head>
      <section className="w-full md:px-8 lg:px-48 mb-16">
        <Hero />
        <FeaturedJobs jobs={jobs} />
      </section>
    </Layout>
  );
}
