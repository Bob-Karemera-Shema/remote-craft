import { useEffect, useRef, useState } from "react";
import { Job } from "@/utils/types";
import FeaturedJob from "../shared/FeaturedJob";

// Number of jobs to display per scroll "page"
const BATCH_SIZE = 10;

const FeaturedJobs = ({ jobs }: { jobs: Job[] }) => {
    // State to hold the currently visible batch of jobs
    const [visibleJobs, setVisibleJobs] = useState<Job[]>(jobs.slice(0, BATCH_SIZE));

    // Index to keep track of how many jobs we've revealed so far
    const [currentIndex, setCurrentIndex] = useState(BATCH_SIZE);

    // Ref for the div that acts as a scroll trigger at the bottom of the list
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Create a new IntersectionObserver that watches when the loader div enters the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    // If the loader div is visible, increase the number of visible jobs
                    const nextIndex = currentIndex + BATCH_SIZE;
                    setVisibleJobs(jobs.slice(0, nextIndex));
                    setCurrentIndex(nextIndex);
                }
            },
            { threshold: 1 } // Trigger only when 100% of the loader is visible
        );

        // Start observing the loader div
        const currentLoader = loaderRef.current;
        if (currentLoader) observer.observe(currentLoader);

        // Cleanup: unobserve the div when the component unmounts or when effect re-runs
        return () => {
            if (currentLoader) observer.unobserve(currentLoader);
        };
    }, [currentIndex, jobs]);

    return (
        <section className="w-full mt-2.5">
            <h2 className="font-bold text-2xl tracking-tighter mb-4">Featured Jobs</h2>
            <article className="w-full">
                {
                    visibleJobs.map(job => (
                        <FeaturedJob key={job.id} job={job} />
                    ))
                }
                <div ref={loaderRef} />
            </article>
        </section>
    )
}

export default FeaturedJobs;