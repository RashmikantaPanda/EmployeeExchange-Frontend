import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginRequest={
    email:'',
    password:''
  }

  login(data:any){
    this.loginRequest.email=data.value.email;
    this.loginRequest.password=data.value.password;
    this.http.post("http://localhost:8080/candidate/login",this.loginRequest).subscribe((result:any)=>{
      console.log(result);
    });

  //   this.http.get("http://localhost:8080/candidate/home").subscribe(
  //   (result: any) => {
  //     console.log(result);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );
  }
}
