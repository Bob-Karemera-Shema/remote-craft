import { ApiResponse } from "./types";

export async function getJobs() {
    try {
        const data: ApiResponse = await fetch('https://remotive.com/api/remote-jobs').then(res => res.json());
        return data.jobs;
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown Error';
        console.error('Error fetching jobs: ', message);
        throw new Error(message);
    }
}

export async function getJobIds() {
    const jobs = await getJobs();
    return jobs.map(job => ({ params: { id: (job.id).toString() } }));
}

export async function getJobById(id: number) {
    const jobs = await getJobs();
    return jobs.find(job => job.id === id);
}

export async function getJobsByCompany(companyName: string) {
    try {
        const data: ApiResponse = await fetch(`https://remotive.com/api/remote-jobs?company_name=${companyName}`).then(res => res.json());
        return data.jobs;
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown Error';
        console.error(`Error fetching ${companyName} jobs: `, message);
        throw new Error(message);
    }
}