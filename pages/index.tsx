import Head from "next/head";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>RemoteCraft</title>
      </Head>
      <section className="w-screen md:px-8 lg:px-36">
        <Hero />
      </section>
    </Layout>
  );
}
