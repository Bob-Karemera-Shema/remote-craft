import Head from "next/head";
import { GetStaticProps } from "next";
import Hero from "@/components/sections/Hero";
import Layout from "@/components/Layout";
import FeaturedJobs from "@/components/sections/FeaturedJobs";
import { ApiResponse, Job } from "@/utils/types";

interface HomeProps {
  jobs: Job[]
}

export const getStaticProps: GetStaticProps = async () => {
  let jobs: Job[];

  try {
    const data: ApiResponse = await fetch('https://remotive.com/api/remote-jobs').then(res => res.json());
    jobs = data.jobs;
  } catch(err) {
    const message = err instanceof Error ? err.message : 'Unknown Error';
    console.error('Error fetching jobs: ', message);
    throw new Error(message);
  }

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
