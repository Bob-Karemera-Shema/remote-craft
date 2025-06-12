import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";

const Hero = () => {
    return (
        <section className="flex justify-center items-center py-8 h-[60vh] w-full">
            <div className="h-full w-full relative">
                <Image
                    src='/hero-image.jpeg'
                    width={1200}
                    height={904}
                    alt="Hero image"
                    className="rounded-xl h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-6">
                    <h1 className="font-black text-4xl text-background">Find your next remote job</h1>
                    <form>
                        <SlMagnifier />
                        <input
                            type="search"
                            placeholder="Search for jobs"
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Hero;