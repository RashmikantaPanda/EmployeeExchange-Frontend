import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private adminService:AdminService){}

  candidatesData:any={};
  employersData:any={};

  ngOnInit(){
    this.getAllCandidates();
    this.getAllEmployers();
  }

  getAllEmployers(){
    this.adminService.getAllEmployee().subscribe((data:any)=>{
      this.employersData=data;
      console.log(data);

    })
  }
  getAllCandidates(){
    this.adminService.getAllCandidate().subscribe((data:any)=>{
      this.candidatesData=data;
      console.log(data)
    })
  }
}
