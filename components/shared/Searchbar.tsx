import { SlMagnifier } from "react-icons/sl";

const Searchbar = () => {
    return (
        <form className="flex gap-4 items-center bg-custom-gray py-1.5 px-3 rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-hover-gray focus:bg-hover-gray">
            <SlMagnifier className="cursor-pointer" />
            <input
                type="search"
                placeholder="Search"
                className="outline-none"
            />
        </form>
    )
}

export default Searchbar;