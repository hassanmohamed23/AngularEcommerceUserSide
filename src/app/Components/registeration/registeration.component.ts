import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  loginform: FormGroup = {} as FormGroup;

  isUserLogged: boolean = false;
  constructor(private fb: FormBuilder,
    private router:Router) {
    
  }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      Name:['',Validators.required]
    });

    //this.userloginservice.login("gfggff","ghfh");
    //this.isUserLogged = this.userloginservice.loginStatus();

  }

  Register() {

    console.log(this.loginform.get("Email"));
    console.log(this.loginform.get("Password"));
  //this.usrApi.Register(this.loginform.controls["Email"].value, this.loginform.controls["Password"].value,
    // this.loginform.controls["Name"].value).subscribe({
    //   next:(res)=>{
    //    this.router.navigate(["/Login"]);
    //   }
    // });
    
  //   this.isUserLogged = this.userloginservice.loginStatus();
  //   console.log(this.isUserLogged)
   }
  
  onSubmit() {
    console.log(this.loginform.controls["Email"].value);
    console.log(this.loginform.controls["Password"].value);
    this.Register();
  }
  getEmail() {
    return this.loginform.controls["Email"].value;
  }
  getPassword() {
    return this.loginform.controls["Password"].value;

  }
}
