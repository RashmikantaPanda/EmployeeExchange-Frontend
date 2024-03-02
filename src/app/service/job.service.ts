import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

    baseUrlCandidateJob = 'http://localhost:8080/candidate';
    baseUrlEmployerJob = 'http://localhost:8080/employer';


    // baseUrlCandidateJob = 'http://172.20.10.14:8080/candidate';


  constructor(private http: HttpClient) { }

  getAppliedJobs(): Observable<any[]> {
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    const userId = localStorage.getItem('loggedInUserId'); 
    const url = `${this.baseUrlCandidateJob}/job/applied/${userId}`; 
    return this.http.get<any[]>(url,{headers});
  }

  getAppliedJobsForEmployer():Observable<any[]>{
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    const userId = localStorage.getItem('loggedInUserId'); 
    const url = `${this.baseUrlEmployerJob}/view/appliedJob/${userId}`; 
    return this.http.get<any[]>(url,{headers});
  }
}
