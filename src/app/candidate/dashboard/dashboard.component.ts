import { Component } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  candidateData:any={};

  constructor(private candidateService:CandidateService){}
  ngOnInit(){
     this.candidateService.profile().subscribe((data:any)=>{
      this.candidateData=data;
      console.log(this.candidateData)

     });
  }

}