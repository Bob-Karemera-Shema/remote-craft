import { Work_Sans } from "next/font/google";
import Navbar from "./navbar";

const workSans = Work_Sans({
    subsets: ['latin']
})

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${workSans.className} antialiased`}>
            <header>
                <Navbar />
            </header>
            <body>
                {children}
            </body>
        </html>
    )
}