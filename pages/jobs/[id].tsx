import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Job } from "@/utils/types";
import { getJobById, getJobIds } from "@/utils/jobs";
import { decodeEscapedHtml } from "@/utils/html";
import Button from "@/components/shared/Button";
import Layout from "@/components/Layout";
import Spinner from "@/components/shared/Spinner";

interface SingleJobProps {
  job: Job
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getJobIds();

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<SingleJobProps> = async ({ params }) => {
  if (!params?.id) return { notFound: true };

  const job = await getJobById(Number(params.id));

  if (!job) return { notFound: true };

  return {
    props: {
      job,
    },
  };
}

export default function SingleJob({ job }: SingleJobProps) {
  // Check fallback state to show loading spinner
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />
  }

  // 1. decode the escaped HTML
  const decodedHtml = decodeEscapedHtml(job.description);

  return (
    <Layout>
      <section className="w-full px-6 md:px-8 lg:px-48 mb-16 flex flex-col gap-8.5">
        <article className="w-full flex flex-col md:flex-row justify-between items-start gap-6 mt-12">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-black mb-4">{job.title}</h1>
            <p className="text-minor-details">{`at ${job.company_name}`}</p>
          </div>
          <Button className="btn-secondary py-2 px-4 rounded-xl text-nowrap order-1 md:order-2">Save job</Button>
        </article>

        <article className="flex flex-col gap-6">
          <h3 className="font-bold text-lg">Job details</h3>

          <div className="w-full grid grid-cols-2 border-t-1 border-custom-gray pt-6">
            <div>
              <p className="text-minor-details">Category</p>
              <p>{job.category}</p>
            </div>
            <div>
              <p className="text-minor-details">Employment type</p>
              <p>{job.job_type}</p>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 border-t-1 border-custom-gray pt-6">
            <div>
              <p className="text-minor-details">Location</p>
              <p>{job.candidate_required_location}</p>
            </div>
            <div>
              <p className="text-minor-details">Salary</p>
              <p>{job.salary}</p>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 border-t-1 border-custom-gray pt-6">
            <div>
              <p className="text-minor-details">Published on</p>
              <p>{new Date(job.publication_date).toISOString().split("T")[0]}</p>
            </div>
          </div>
        </article>

        <article>
          <div dangerouslySetInnerHTML={{ __html: decodedHtml }} />
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Tags</h3>
          <div className="flex flex-wrap gap-6">
            {
              job.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-custom-gray py-1 px-4 rounded-xl"
                >
                  {tag}
                </span>
              ))
            }
          </div>
        </article>
        <article className="flex justify-end gap-4 flex-wrap">
          <Button className="py-2 px-6 rounded-xl">Apply now</Button>
          <Button variant="secondary" className="py-2 px-6 rounded-xl">Message company</Button>
        </article>
      </section>
    </Layout>
  );
}
