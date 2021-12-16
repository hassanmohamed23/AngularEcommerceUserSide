import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponse } from '../ViewModels/iresponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLogged:boolean=false;
  private options ={headers:new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'})} 
 
  constructor(private httpservice:HttpClient) { }


  login(userName:string="",password:string=""): Observable<any> {
    const body=JSON.stringify({'UserName':userName,'Password':password});
    console.log(body)  
    return this.httpservice.post(`${environment.APIURL}/login`, body,this.options);
  }

  signUp(firstName:string="",lastName:string="",userName:string="",email:string="",password:string=""): Observable<any> {
    const body=JSON.stringify({
      "firstName": firstName,
      "lastName": lastName,
      "username": userName,
      "email": email,
      "password": password
    });
    console.log(body)  
    return this.httpservice.post(`${environment.APIURL}/Signup`, body,this.options);
  }

  getUserInfo(userID:number){
    return this.httpservice.get(`${environment.APIURL}/Profile/${userID}`);
  }
}
