import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {


  baseUrlCandidate = 'http://localhost:8080/candidate';

  // baseUrlCandidate = 'http://172.20.10.14:8080/candidate';

  constructor(private http: HttpClient, private router: Router,private authService:AuthService) { }

  loginRequest = {
    email: '',
    password: ''
  }

  data: any = {};
   
  registration(value: any) {
    return this.http.post(`${this.baseUrlCandidate}/register`, value);
  }


  login(data: any) {
    this.loginRequest.email = data.value.email;
    this.loginRequest.password = data.value.password;
    this.http.post(`${this.baseUrlCandidate}/login`, this.loginRequest).subscribe(
      (result: any) => {
        this.authService.login();
        console.log("Login Success ")
        console.log("Token ," + result.token)
        
        localStorage.setItem("token", result.token);
        localStorage.setItem("loggedInUserId", result.userId);
        localStorage.setItem("loggedInUser", this.loginRequest.email);
        this.router.navigate(['/candidate/dashboard'])

      }, (error: any) => {
        console.error(error);
      }
    );
  }

  dashboard() {
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${this.baseUrlCandidate}/${localStorage.getItem('loggedInUserId')}`, { headers });
  }

  viewAllJobs() {
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${this.baseUrlCandidate}/job/available`, { headers });
  }

  applyJobRequest: {
    employerId: null,
    candidateId: number,
    jobId: number
  } = { employerId: null, candidateId: 0, jobId: 0 };


  applyNewJob(job: any) {
    const loggedInCandidateString = localStorage.getItem('loggedInUserId');
    if (loggedInCandidateString) {
      this.applyJobRequest.candidateId = parseInt(loggedInCandidateString);
    }
    this.applyJobRequest.jobId = job;
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.baseUrlCandidate}/job/apply`, this.applyJobRequest, { headers });
  }


}
