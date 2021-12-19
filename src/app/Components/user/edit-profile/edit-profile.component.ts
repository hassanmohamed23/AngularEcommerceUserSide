import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user: any;
  loginform: FormGroup = {} as FormGroup;
  constructor(private userService: UserService,private fb: FormBuilder
    ,private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      country: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(5)]],
      fullAddress: ['', [Validators.required, Validators.minLength(10)]]
    });
    let userID = Number(sessionStorage.getItem("userID"));
    this.userService.getUserInfo(userID)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.user = res;
          this.setValues();
        }
      });
      
      
  }

  onSubmit() {

    this.userService.editProfile(this.user.id,this.loginform.get("firstName")?.value, 
      this.loginform.get("lastName")?.value,this.loginform.get("country")?.value,
      this.loginform.get("city")?.value,this.loginform.get("fullAddress")?.value)
      .subscribe({
        next: (res) => {
          // this.afterLoginResp(res);
          this.router.navigate(['User/Profile']);
        }, error: (error) => {
          // this.validationMsg = "error occured try again"
          console.log(error);
        }
      });
  }
  setValues(){
    this.loginform.patchValue({
      firstName: this.user.firstname,
      lastName: this.user.lastname,
      country: this.user.country,
      city: this.user.city,
      fullAddress: this.user.fullAddress
    });
  }

}
