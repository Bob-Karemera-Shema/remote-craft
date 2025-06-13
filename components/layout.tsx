import { Work_Sans } from "next/font/google";
import Head from "next/head";
import Navbar from "./shared/Navbar";

const workSans = Work_Sans({
    subsets: ['latin']
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className={workSans.className}>
            <Head>
                <title>RemoteCraft</title>
            </Head>
            <header>
                <Navbar />
            </header>
            {children}
        </main>
    )
}