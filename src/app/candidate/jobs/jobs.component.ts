import { Component } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  constructor(private candidateService:CandidateService){}
  allJobs:any={};

  ngOnInit(){
    this.candidateService.viewAllJobs().subscribe((data:any)=>{
      this.allJobs=data;
      console.log("All Jobs : "+this.allJobs);
     });
  }

  
  applyJob(job:any){
    this.candidateService.applyNewJob(job).subscribe((data:any)=>{
        console.log(data);
    })
  }
}
