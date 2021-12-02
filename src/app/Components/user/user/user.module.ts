import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserprofileComponent } from '../userprofile/userprofile.component';


const routes:Routes=[
  {path:'', redirectTo:'/user/profile',pathMatch:'full'},
  {path:'/myprofile',component:UserprofileComponent}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ]
})
export class UserModule { }
