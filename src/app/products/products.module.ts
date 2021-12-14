import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByBrandComponent } from './view-product-by-brand/view-product-by-brand.component';
import { ViewProductBySubComponent } from './view-product-by-sub/view-product-by-sub.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewProductByCategoryComponent,
    ViewProductComponent,
    ViewAllProductComponent,
    ViewProductByBrandComponent,
    ViewProductBySubComponent,
    SearchResultComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,

  ]
})
export class ProductsModule { }
