import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAthunGuard } from 'src/app/gaurd/user-athun.guard';
import { UserOrdersComponent } from './user-orders/user-orders.component';



@NgModule({
  declarations: [
    UserComponent,
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent,
    UserOrdersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
     UserRoutingModule,

  ]
})
export class UserModule { }
