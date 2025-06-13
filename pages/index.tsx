import Head from "next/head";
import Hero from "@/components/sections/Hero";
import Layout from "@/components/Layout";
import FeaturedJobs from "@/components/shared/FeaturedJobs";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>RemoteCraft</title>
      </Head>
      <section className="w-screen md:px-8 lg:px-36">
        <Hero />
        <FeaturedJobs />
      </section>
    </Layout>
  );
}
