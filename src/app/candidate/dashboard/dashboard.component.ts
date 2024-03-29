import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  candidateData:any={};

  constructor(private candidateService:CandidateService){}
  ngOnInit(){
     this.candidateService.dashboard().subscribe((data:any)=>{
      this.candidateData=data;
     });
  }

}
