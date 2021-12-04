import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path:'', redirectTo:'/User', pathMatch:'full'},
  {path:'Login', component: LoginComponent}
];

@NgModule({
  declarations: [
    UserComponent,
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
     UserRoutingModule,
    RouterModule.forChild(routes)

  ]
})
export class UserModule { }
