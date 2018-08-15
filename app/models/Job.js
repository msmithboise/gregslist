export default class Job{
    constructor(data){
        console.log("hello from job")
        this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    }
}
