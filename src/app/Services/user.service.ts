import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponse } from '../ViewModels/iresponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userName:any ="";
  public userNameSub = new BehaviorSubject<string>("");
  private isUserLogged:boolean=false;
  private options ={headers:new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'})} 
 
  constructor(private httpservice:HttpClient,private router: Router) { }

  getUserName(){
    return this.userNameSub.asObservable();
  }

  setUserName(){
    this.userName=sessionStorage.getItem("username");
    this.userNameSub.next(this.userName);
  }
  logout(){
    sessionStorage.clear();
    this.setUserName();
    this.router.navigate(['/User/Login']);

  }
  login(userName:string="",password:string=""): Observable<any> {
    const body=JSON.stringify({'UserName':userName,'Password':password});
    console.log(body)  
    return this.httpservice.post(`${environment.APIURL}/login`, body,this.options);
  }

  signUp(firstName:string="",lastName:string="",userName:string="",email:string="",
   country:string,city:string,fullAddress:string,password:string=""): Observable<any> {
    const body=JSON.stringify({
      "firstName": firstName,
      "lastName": lastName,
      "username": userName,
      "email": email,
      "country": country,
      "city": city,
      "fullAddress": fullAddress,
      "password": password
    });
    console.log(body)  
    return this.httpservice.post(`${environment.APIURL}/Signup`, body,this.options);
  }


  editProfile(id:number,firstName:string,lastName:string,country:string,city:string,fullAddress:string): Observable<any> {
    const body={
      "id":id,
      "firstName": firstName,
      "lastName": lastName,
      "country": country,
      "city": city,
      "fullAddress": fullAddress
    };
    console.log(body)  
    return this.httpservice.post(`${environment.APIURL}/Profile/Edit`, body);
  }

  getUserInfo(userID:number){
    return this.httpservice.get(`${environment.APIURL}/Profile/${userID}`);
  }
}
