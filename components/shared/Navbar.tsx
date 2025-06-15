import Link from "next/link"
import { BiSolidCylinder } from "react-icons/bi";
import { IoIosMenu } from "react-icons/io";
import Searchbar from "./Searchbar"

const navLinks = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Jobs',
        link: '/jobs'
    },
    {
        label: 'Post a Job',
        link: '/post-a-job'
    },
    {
        label: 'Companies',
        link: '/companies'
    }
]

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center py-4 px-12 shadow-sm">
            <div className="flex gap-10 items-center">
                {/* Navigation Links */}
                <Link
                    href='/'
                    aria-label="Home Page"
                    className="font-bold text-xl tracking-tight flex gap-4 items-center"
                >
                    <BiSolidCylinder />
                    <span>RemoteCraft</span>
                </Link>
                <div className="hidden md:flex gap-10 items-center">
                    {
                        navLinks.map(link => (
                            <Link
                                key={link.label}
                                href={link.link}
                                aria-label={`${link.label} Page`}
                                className="font-normal hover:border-b hover:border-foreground transition duration-100 ease-in-out"
                            >
                                {link.label}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="hidden lg:flex gap-8 items-center">
                <div>
                    {/* Searchbar container */}
                    <Searchbar />
                </div>
                <div className="flex gap-2">
                    {/* Bookmark and settings container */}
                    <div className="h-full bg-custom-gray p-1.5 rounded-md cursor-pointer hover:bg-hover-gray transition duration-100 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-bookmark-icon lucide-bookmark">
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                    </div>
                    <div className="h-full bg-custom-gray p-1.5 rounded-md cursor-pointer hover:bg-hover-gray transition duration-100 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-settings-icon lucide-settings">
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </div>
                </div>
            </div>
            <IoIosMenu className="h-8 w-8 md:hidden" />
        </nav>
    )
}

export default Navbar