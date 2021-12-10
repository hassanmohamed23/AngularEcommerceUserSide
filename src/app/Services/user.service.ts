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
 
  constructor(private httpservice:HttpClient) { }


  login(UserName:string="",Password:string=""): Observable<any> {
    const options ={headers:new HttpHeaders({ 'content-type': 'application/json'})}  
    const body=JSON.stringify({'UserName':UserName,'Password':Password});
    console.log(body)  
    return this.httpservice.post(`${environment.APIURL}/login`, body,options);
  }
}
