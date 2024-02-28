import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/service/employer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employer: any;

  constructor(private route: ActivatedRoute, private employerService: EmployerService) { }

  ngOnInit() {
    const employerId = this.route.snapshot.params['id'];
    this.employerService.getEmployerById(employerId).subscribe(
      (data: any) => {
        this.employer = data;
      });
  }

  addNewJob(){
    
  }
}
