import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";
import { MainButton } from "./Button";

const Hero = () => {
    return (
        <section className="flex justify-center items-center py-8 h-[60vh] w-full">
            <div className="h-full w-full relative">
                <Image
                    src='/hero-image.jpeg'
                    width={1200}
                    height={673}
                    alt="Hero image"
                    className="md:rounded-xl h-full w-full object-cover"
                />
                <div className="absolute bottom-10 left-6 px-4 md:px-0">
                    <h1 className="font-black text-4xl text-background mb-4">Find your next remote job</h1>
                    <form className="flex items-center bg-background w-max py-2 px-2 gap-4 rounded-xl">
                        <SlMagnifier className="ml-2" />
                        <input
                            type="search"
                            placeholder="Search for jobs"
                            className="outline-none"
                        />
                        <MainButton
                            type="submit"
                            className="py-2 px-4"
                        >
                            Search
                        </MainButton>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Hero;