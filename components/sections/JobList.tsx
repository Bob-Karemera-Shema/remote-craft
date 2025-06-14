import { useEffect, useRef, useState } from "react";
import { Job } from "@/utils/types";
import ListedJob from "../shared/ListedJob";

// Number of jobs to display per scroll "page"
const BATCH_SIZE = 10;

interface JobListProps {
    jobs: Job[];
    infiniteScroll?: boolean;
}

const JobList = ({ jobs = [], infiniteScroll = true }: JobListProps) => {
    // State to hold the currently visible batch of jobs
    const [visibleJobs, setVisibleJobs] = useState<Job[]>(infiniteScroll ? jobs.slice(0, BATCH_SIZE) : jobs);

    // Index to keep track of how many jobs we've revealed so far
    const [currentIndex, setCurrentIndex] = useState(infiniteScroll ? BATCH_SIZE : jobs.length);

    // Ref for the div that acts as a scroll trigger at the bottom of the list
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!infiniteScroll) return;

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
        <section className="w-full px-6 md:px-0">
            {
                visibleJobs.map(job => (
                    <ListedJob key={job.id} job={job} />
                ))
            }
            {infiniteScroll && <div ref={loaderRef} />}
        </section>
    )
}

export default JobList;