import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { WatchListComponent } from './Components/watch-list/watch-list.component';
import { UserAthunGuard } from './gaurd/user-athun.guard';

const routes: Routes = [
   {path:'', redirectTo:'/home', pathMatch:'full'}, //Default path
  {path:'home', component: HomeComponent },
  {path:'aboutus', component: AboutUsComponent}, 
  {path:'cart' ,component:CartComponent},
  {path:'watch' ,component:WatchListComponent},
  {path:'checkout' ,component:CheckoutComponent,canActivate:[UserAthunGuard]},
  {path:'contact' ,component:ContactUsComponent},
  {path:"Register",component:RegisterationComponent},
  {
    path: 'User', 
    loadChildren: () => import('src/app/Components/user/user.module')
                        .then(m => m.UserModule)
  },
  
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
