import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  baseUrlEmployer = 'http://localhost:8080/employer';

  // baseUrlEmployer = 'http://172.20.10.14:8080/employer';

  loginRequest = {
    email: '',
    password: ''
  }

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  public login(data: any) {
    this.loginRequest.email = data.value.email;
    this.loginRequest.password = data.value.password;
    this.http.post(`${this.baseUrlEmployer}/login`, this.loginRequest).subscribe(
      (result: any) => {
        this.authService.login();
        console.log("Login Success ")
        console.log("Token ," + result.token);
        console.log("Employer Id :  ," + result.userId);
       
        localStorage.setItem("token", result.token);
        localStorage.setItem("loggedInUserId", result.userId);
        localStorage.setItem("loggedInUser", this.loginRequest.email);
        this.router.navigate(['/employer/dashboard', result.userId]);

      }, (error: any) => {
        console.error(error);
      }
    );
  }

  public getEmployerById(employerId: any) {
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${this.baseUrlEmployer}/get/id/${employerId}`, { headers });
  }

  createJob(newJob: any) {
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.baseUrlEmployer}/add/job`, newJob, { headers });
  }

  updateAppliedJob(updateJob:any){
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
     this.http.post(`${this.baseUrlEmployer}/update/appliedJob`, updateJob, { headers }).subscribe((data:any)=>{
      console.log(data);
     });
  }


}
