import { Work_Sans } from "next/font/google";
import Navbar from "./Navbar";

const workSans = Work_Sans({
    subsets: ['latin']
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className={workSans.className}>
            <header>
                <Navbar />
            </header>
            {children}
        </main>
    )
}