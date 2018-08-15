import Job from '../../models/Job.js'
//Private


const jobsApi = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs/',
    timeout: 3000
})

//Public
export default class JobService {
    constructor() {
        console.log("Hello from JobService!")

     }


getJobs(draw) {
    jobsApi.get()
    .then(res => {
    console.log('jobs res', res)

    let jobs = res.data.data.map(rawJob =>{
        return new Job(rawJob)
    })
    draw(jobs)
    })
}

addJob(formData, draw) {
    let newJob = new Job ({
        company: formData.company.value,
        jobTitle: formData.jobTitle.value,
        hours: formData.hours.value,
        rate: formData.rate.value,
        description: formData.description.value
    })


jobsApi.post('',newJob)
.then(res => {

    this.getJobs(draw)
})
}
deleteJob(jobId, drawfn) {
    jobsApi.delete(jobId)
    .then(res =>{
        this.getJobs(draw)
    })
}



}