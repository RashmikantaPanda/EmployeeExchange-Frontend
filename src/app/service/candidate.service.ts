import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {


  baseUrlCandidate = 'http://localhost:8080/candidate';

  constructor(private http: HttpClient, private router: Router) { }

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
    this.http.post("http://localhost:8080/candidate/login", this.loginRequest).subscribe(
      (result: any) => {
        console.log("Login Success ")
        console.log("Token ," + result.token)
        localStorage.setItem("candidate_token", result.token);
        localStorage.setItem("loggedInCandidate", this.loginRequest.email);
        this.router.navigate(['/candidate/dashboard'])

      }, (error: any) => {
        console.error(error);
      }
    );
  }

  dashboard() {
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('candidate_token')}`);
    return this.http.get(`http://localhost:8080/candidate/email/${localStorage.getItem('loggedInCandidate')}`, { headers });
  }

  viewAllJobs() {
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('candidate_token')}`);
    return this.http.get(`${this.baseUrlCandidate}/job/available`, { headers });
  }

  applyJobRequest: {
    employerId: null,
    candidateId: number,
    jobId: number
  } = { employerId: null, candidateId: 0, jobId: 0 };


  applyNewJob(job: any) {
    const loggedInCandidateString = localStorage.getItem('loggedInCandidate');
    if (loggedInCandidateString) {
      this.applyJobRequest.candidateId = parseInt(loggedInCandidateString);
      console.log("Candidate Id : " + this.applyJobRequest.candidateId);
    }
    console.log(this.applyJobRequest)
    console.log(job)
    this.applyJobRequest.jobId = job;
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('candidate_token')}`);

    return this.http.post(`${this.baseUrlCandidate}/job/apply`, this.applyJobRequest, { headers });
  }

}
