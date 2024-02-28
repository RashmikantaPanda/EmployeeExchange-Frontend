import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.css']
})
export class AddEmployerComponent {

  constructor(private adminService: AdminService) { }

  employer: any = {
    email: '',
    password: '',
    organizationName: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    }
  };

  onSubmit() {
    console.log('Form submitted:', this.employer);
    this.adminService.addEmployer(this.employer);
  }
}
