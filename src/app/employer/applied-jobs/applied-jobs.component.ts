import { Component } from '@angular/core';
import { EmployerService } from 'src/app/service/employer.service';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css'],
})
export class AppliedJobsComponent {
  appliedJobs: any[] = [];

  updateAppliedJobRequest:{
    appliedJobId:any,
    isAccepted:any,
    rejectReason:any
  }
 
  constructor(private jobService: JobService,private empService:EmployerService) {}

  ngOnInit(): void {
    this.loadAppliedJobs();
  }

  loadAppliedJobs() {
    this.jobService.getAppliedJobsForEmployer().subscribe(
      (data: any[]) => {
        this.appliedJobs = data;
        console.log(this.appliedJobs.length);
      },
      (error) => {
        console.error('Error fetching applied jobs:', error);
      }
    );
  }

  rejectApplication(appliedJob: any) {
    this.updateAppliedJobRequest.appliedJobId=appliedJob.appliedJobId;
    this.updateAppliedJobRequest.isAccepted=false;
    this.updateAppliedJobRequest.rejectReason='Not elegible';
    this.empService.updateAppliedJob(this.updateAppliedJobRequest);
  }
  acceptApplication(appliedJob: any) {
    this.updateAppliedJobRequest.appliedJobId=appliedJob.appliedJobId;
    this.updateAppliedJobRequest.isAccepted=false;
    this.updateAppliedJobRequest.rejectReason='';
    this.empService.updateAppliedJob(this.updateAppliedJobRequest);
  }
}
