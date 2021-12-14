import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { WatchListService } from 'src/app/Services/watch-list.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IResponse } from 'src/app/ViewModels/iresponse';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  prdID:number=1;
  show:boolean=true;
  product:any;
  constructor(private productService:ProductService,
    private activatedRouter:ActivatedRoute,
    private cartService:CartService,
    private watchService:WatchListService) { }

  ngOnInit(): void {
    //this.CatID= Number(this.activatedRouter.snapshot.paramMap.get("id"));
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.prdID=Number(params.get("id"));
      this.productService.getProductByID(this.prdID).subscribe({
        next: (Response: IResponse) => {
          this.product = Response.data;
  
          //this.productList.forEach((product,index)=>{
            this.productService.getProductImgByID(this.product.productId).subscribe({
              next: (Response: IResponse) => {
                this.product["img"]=Response.data;
                //this.prdImgsList[index] = Response.data[0];
              }
            })
          //})

          this.productService.getAllComment(this.product.productId).subscribe({
            next: (Response: IResponse) => {
              console.log(Response);
              this.product["comments"]=Response.data;

              //this.prdImgsList[index] = Response.data[0];
            }
          })
        }
      });
  
    });
}


  fillProductList(CatID:number){
    this.productService.getProductByID(CatID).subscribe({
      next:(res)=>{this.product=res.data}
    });
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  addtowatct(item: any){
    this.watchService.addtowatch(item);
  }
}