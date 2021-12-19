import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAthunGuard } from 'src/app/gaurd/user-athun.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserComponent } from './user.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes:Routes=[
  {path:'', redirectTo:'/User/Login', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'Profile', component: ViewProfileComponent,canActivate:[UserAthunGuard]},
  {path:'editProfile', component: EditProfileComponent,canActivate:[UserAthunGuard]},
  
  {path:'Orders', component: UserOrdersComponent,canActivate:[UserAthunGuard]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
