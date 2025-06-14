import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";
import Button from "../shared/Button";

const Hero = () => {
    return (
        <section className="flex justify-center items-center pb-8 md:py-8 h-[60vh] w-full">
            <div className="h-full w-full relative">
                <Image
                    src='/hero-image.jpeg'
                    width={1200}
                    height={673}
                    alt="Hero image"
                    className="md:rounded-xl h-full w-full object-cover"
                    priority
                />
                <div className="absolute bottom-10 md:left-6 px-6 md:px-0">
                    <h1 className="font-black text-4xl text-background mb-4">Find your next remote job</h1>
                    <form className="flex items-center bg-background w-max py-2 px-2 gap-4 rounded-xl">
                        <SlMagnifier className="ml-2" />
                        <input
                            type="search"
                            placeholder="Search for jobs"
                            className="outline-none"
                        />
                        <Button
                            type="submit"
                            className="py-2 px-4"
                        >
                            Search
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Hero;