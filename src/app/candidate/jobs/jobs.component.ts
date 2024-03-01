import { Component } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent {
  constructor(
    private candidateService: CandidateService,
    private jobService: JobService,
  ) {}

  allJobs: any = {};
  appliedJobs: any[] = [];

  ngOnInit() {
    this.candidateService.viewAllJobs().subscribe((data: any) => {
      this.allJobs = data;
    });

    this.jobService.getAppliedJobs().subscribe((data: any) => {
      this.appliedJobs = data;
      console.log(data);
    });
  }

  applyJob(job: any) {
    this.candidateService.applyNewJob(job).subscribe((data: any) => {
      console.log(data);
    });
  }

  isJobAlreadyApplied(jobId: number): boolean {
    return this.appliedJobs.some(
      (appliedJob: any) => appliedJob.jobId === jobId
    );
  }
}
