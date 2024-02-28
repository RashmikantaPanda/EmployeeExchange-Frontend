import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/service/employer.service';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent {

  newJob: any = {
    jobTitle: '',
    description: '',
    jobType: 'Full-time',
    jobLocation: '',
    salary: null,
    noOfVacancy: null,
    status: true,
    employer: {
      id:null,
    },
    appliedJobs: [],
    deleted: false
  };

  constructor(private employeerService: EmployerService, private router: Router) { }

  addJob() {
    console.log(this.newJob.employer.id)
    this.newJob.employer.id = Number(localStorage.getItem("employer_id")); 
    console.log(this.newJob.employer.id)
    this.employeerService.createJob(this.newJob).subscribe((response: any) => {
        console.log('Job added successfully!', response);
      this.router.navigate(['/employer/dashboard', this.newJob.employer.id]);
    }, error => {
      console.error('Error adding job:', error);
    });
  }

}
