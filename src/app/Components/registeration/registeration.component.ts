import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  loginform: FormGroup = {} as FormGroup;

  isUserLogged: boolean = false;
  validationMsg = "";
  constructor(private fb: FormBuilder,
    private router: Router, private userService: UserService,private productService:ProductService) {

  }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      userName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(5)]],
      fullAddress: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  Register() {

    console.log(this.loginform.get("Email"));
    console.log(this.loginform.get("Password"));

  }

  onSubmit() {

    this.userService.signUp(this.loginform.get("firstName")?.value, this.loginform.get("lastName")?.value,
      this.loginform.get("userName")?.value, this.loginform.get("email")?.value,
      this.loginform.get("country")?.value, this.loginform.get("city")?.value,
      this.loginform.get("fullAddress")?.value,this.loginform.get("password")?.value)
      .subscribe({
        next: (res) => {
          this.afterLoginResp(res);
        }, error: (error) => {
          this.validationMsg = "error occured try again"
        }
      });
  }

  afterLoginResp(response: any) {
    console.log(response.IsAuthenticated);
    if (response.isAuthenticated == true) {
      sessionStorage.setItem("isUserLogged", "yes");
      sessionStorage.setItem("userID", response.userID);
      sessionStorage.setItem("username", response.username);
      this.userService.setUserName();

      this.router.navigate(['User/Profile']);
    }
    else {
      sessionStorage.setItem("isUserLogged", "no");
      this.validationMsg = response.message;
    }
  }


}
