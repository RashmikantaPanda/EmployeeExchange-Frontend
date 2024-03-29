import { Component } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private candidateService: CandidateService) { }

  userLogin(loginRequest: any) {
    this.candidateService.login(loginRequest);
  }
}
