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
  validationMsg = "";
  constructor(private formBuilder: FormBuilder,private router: Router,
              private userService: UserService, private p: ProductService) {

  }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
    });

  }

  onSubmit() {

    this.userService.login(this.loginform.get("userName")?.value, 
    this.loginform.get("password")?.value)
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
    console.log(response.isAuthenticated);
    if (response.isAuthenticated == true) {
      //sessionStorage.setItem("isUserLogged", "yes");
      this.validationMsg = "Login succeeded"
    }
    else {
      //this.isValidMsgHidden = false;
      //sessionStorage.setItem("isUserLogged", "no");
      this.validationMsg = response.message;
      //console.log(this.isValidMsgHidden);
    }
  }
  


}
