import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent {
  appliedJobs: any[] = []; 

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getAppliedJobs().subscribe((data: any) => {
      this.appliedJobs = data;
      console.log(data);
    });
  }
}
