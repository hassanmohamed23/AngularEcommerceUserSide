import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IResponse } from 'src/app/ViewModels/iresponse';


@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.scss']
})
export class ViewAllProductComponent implements OnInit {


  public productList: any[] = [];
  public prdImgsList: any[] = [];
  constructor(private ProductService: ProductService,
    private cartService:CartService) {


  }
  

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe({
      next: (Response: IResponse) => {
        this.productList = Response["data"];
        this.productList.forEach((product,index)=>{
          this.ProductService.getProductImgByID(product.productId).subscribe({
            next: (Response: IResponse) => {
              this.prdImgsList[index] = Response.data[0];
            }
          })
        })
      }
    });
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
 
}
