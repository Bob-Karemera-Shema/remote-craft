import Link from "next/link"

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
        <nav className="flex flex-col md:flex-row md:justify-between py-5 px-12 md:border md:border-solid md:border-custom-gray">
            <div className="flex gap-10 items-center">
                {/* Navigation Links */}
                <Link
                    href='/'
                    aria-label="Home Page"
                    className="font-black text-xl tracking-tight"
                >
                    RemoteCraft
                </Link>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {
                        navLinks.map(link => (
                            <Link
                                key={link.label}
                                href={link.link}
                                aria-label={`${link.label} Page`}
                                className="font-medium"
                            >
                                {link.label}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="flex">
                <div>
                    {/* Searchbar container */}
                    <input
                        type="search"
                        placeholder="Search"
                        className="bg-custom-gray py-1.5 px-3 rounded-md"
                    />
                </div>
                <div className="flex">
                    {/* Bookmark and settings container */}
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
        </nav>
    )
}

export default Navbar