import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup = {} as FormGroup; 

  isValidMsgHidden: boolean = true;
  constructor(private formBuilder: FormBuilder,private router: Router,
              private userService: UserService, private p: ProductService) {

  }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      UserName: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      Password: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
    });


  }

  login() {

    sessionStorage.setItem("user","logged");
    console.log(sessionStorage.getItem("user"));

  }

  logout() {

    sessionStorage.setItem("user","logout");
    console.log(sessionStorage.getItem("user"));

  }

  onSubmit() {

    this.userService.login(this.loginform.get("UserName")?.value, 
    this.loginform.get("UserName")?.value)
    .subscribe({
        next: (res) => {
          console.log(res);
          this.afterLoginResp(res);
        },error:(error)=>{
          console.log(error);
          this.afterLoginResp(error);
        }
      });
  }

  afterLoginResp(response:any){
    if(response.title=="success"){
      sessionStorage.setItem("isUserLogged","yes");
      //console.log(this.isValidMsgHidden);
    }
    else{
      this.isValidMsgHidden=false;
      sessionStorage.setItem("isUserLogged","no");
      //console.log(this.isValidMsgHidden);
    }
  }
  


}
