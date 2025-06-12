import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="w-screen px-36">
        <Hero />
      </section>
    </Layout>
  );
}
