import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private adminService: AdminService) { }

  adminLogin(loginRequest: any) {
    console.log(loginRequest.value.email);
    console.log(loginRequest.value.password);

    this.adminService.login(loginRequest);
  }
}
