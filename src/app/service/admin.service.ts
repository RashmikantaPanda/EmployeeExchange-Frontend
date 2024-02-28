import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { }

  // For localhost

  baseUrlAdmin = 'http://localhost:8080/admin';
  baseUrlCandidate = 'http://localhost:8080/candidate';

  // // For Diff Network

  // baseUrlAdmin = 'http://172.20.10.14:8080/admin';
  // baseUrlCandidate = 'http://172.20.10.14:8080/candidate';


  loginRequest = {
    email: '',
    password: ''
  }

  data: any = {};

  public login(data: any) {
    this.loginRequest.email = data.value.email;
    this.loginRequest.password = data.value.password;
    this.http.post(`${this.baseUrlAdmin}/login`, this.loginRequest).subscribe(
      (result: any) => {
        console.log("Login Success ")
        console.log("Token ," + result.token)
        localStorage.setItem("token", result.token);
        localStorage.setItem("loggedInAdmin", this.loginRequest.email);
        this.router.navigate(['/admin/dashboard'])

      }, (error: any) => {
        console.error(error);
      }
    );
  }

  public getAllEmployee() {
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${this.baseUrlAdmin}/employers/all`, { headers });
  }

  public getAllCandidate() {
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${this.baseUrlAdmin}/candidates/all`, { headers });
  }
}
