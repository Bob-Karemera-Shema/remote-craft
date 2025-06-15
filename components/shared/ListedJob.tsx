import Image from "next/image";
import type { Job } from "@/utils/types"
import Button from "./Button";
import Link from "next/link";

const ListedJob = ({ job }: { job: Job }) => {
    return (
        <div className="w-full flex justify-between md:items-center gap-4 mb-4 border-b-1 border-custom-gray pb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="h-16 w-16 p-1.5 rounded-md border border-hover-gray">
                    <Image
                        src={job.company_logo}
                        alt={`${job.company_name} logo`}
                        width={128} height={128}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-medium">{`${job.title} at ${job.company_name}`}</p>
                    <p className="text-minor-details">{`${job.salary}`}</p>
                </div>
            </div>
            <Link href={`/jobs/${job.id}`} aria-label={`${job.title} job page`}>
                <Button variant="secondary" className="h-max py-1.5 px-3">
                    View
                </Button>
            </Link>
        </div>
    )
}

export default ListedJob;