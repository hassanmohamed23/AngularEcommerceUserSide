import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByBrandComponent } from './view-product-by-brand/view-product-by-brand.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductBySubComponent } from './view-product-by-sub/view-product-by-sub.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'details/:id', component: ViewProductComponent },
  { path: 'category/:id', component: ViewProductByCategoryComponent },
   { path: 'subcat/:id', component: ViewProductBySubComponent },

  { path: 'brand/:id', component: ViewProductByBrandComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
