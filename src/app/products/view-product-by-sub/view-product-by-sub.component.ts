import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { WatchListService } from 'src/app/Services/watch-list.service';
import { IResponse } from 'src/app/ViewModels/iresponse';

@Component({
  selector: 'app-view-product-by-sub',
  templateUrl: './view-product-by-sub.component.html',
  styleUrls: ['./view-product-by-sub.component.scss']
})
export class ViewProductBySubComponent implements OnInit {
  subCatID:number=1;
  show:boolean=true;
  productList:any=[];
  public prdImgsList: any[] = [];
  constructor(private productService:ProductService
    ,private activatedRouter:ActivatedRoute,
    private cartService:CartService,
    private watchService:WatchListService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.subCatID=Number(params.get("id"));
      this.fillProductList(this.subCatID)
    });
    this.fillProductList(this.subCatID);
  
  }
  fillProductList(CatID:number){
    this.productService.getProductsBySubCatID(CatID).subscribe({
      next: (Response: IResponse) => {

      this.productList = Response["data"];

      this.productList.forEach((product:any,index:any)=>{
        this.productService.getProductImgByID(product.productId).subscribe({
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
  addtowatct(item: any){
    this.watchService.addtowatch(item);
  }
}
