import { Job } from "@/utils/types";
import FeaturedJob from "../shared/FeaturedJob";

const FeaturedJobs = ({ jobs }: { jobs: Job[]}) => {
    return (
        <section className="w-full mt-2.5">
            <h2 className="font-bold text-2xl tracking-tighter mb-4">Featured Jobs</h2>
            <article className="w-full">
                {
                    jobs.map(job => (
                        <FeaturedJob key={job.id} job={job} />
                    ))
                }
            </article>
        </section>
    )
}

export default FeaturedJobs;