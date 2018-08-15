import JobService from "./JobService.js"

//Private

let jobService = new JobService()

function drawJobs(jobs) {
    let template = ''
    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        template += `
    
<div style="outline: 1px solid black" class="col-3">
<p><b>Company:</b> ${job.company}</p>
<p><b>Job Title:</b> ${job.jobTitle}</p>
<p><b>Hours:</b> ${job.hours}</p>
<p><b>Rate:</b> ${job.rate}</p>
<p><b>Description:</b> ${job.description}</p>
<button onclick="app.controllers.jobController.deleteJob('${job._id}')">DELETE</button>
</div>
`
    }
document.getElementById('jobs').innerHTML = template

}


//Public
export default class JobController{
    constructor(){
        console.log("hello from JobController")
        jobService.getJobs(drawJobs)
    }

    addJob(e) {
        e.preventDefault();
        let formData = e.target
        jobService.addJob(formData, drawJobs)
        formData.reset()
    }
    deleteJob(jobId) {
        jobService.deleteJob(carId, drawJobs)
    }


}
