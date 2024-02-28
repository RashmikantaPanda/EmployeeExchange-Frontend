import { Component } from '@angular/core';
import { EmployerService } from 'src/app/service/employer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private employerService: EmployerService) { }

  employerLogin(loginRequest: any) {
    console.log(loginRequest.value.email);
    console.log(loginRequest.value.password);

    this.employerService.login(loginRequest);
  }
}
