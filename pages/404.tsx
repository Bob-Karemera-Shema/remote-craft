import Button from "@/components/shared/Button";
import { Work_Sans } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const workSans = Work_Sans({
    subsets: ['latin']
});

export default function Custom404() {
    return (
        <>
            <Head>
                <title>RemoCraft | 404 Not Found</title>
            </Head>
            <main className={workSans.className}>
                <section className="h-screen w-screen flex flex-col justify-center items-center">
                    <p className="text-custom-blue font-medium text-3xl">404</p>
                    <h1 className="text-6xl font-semibold mb-4">Page not found</h1>
                    <p className="text-minor-details text-xl mb-4">Sorry, we couldn't find the page you're looking for.</p>
                    <Link href='/' aria-label="Home page">
                        <Button className="py-2 px-4">Back to home</Button>
                    </Link>
                </section>
            </main>
        </>
    );
}