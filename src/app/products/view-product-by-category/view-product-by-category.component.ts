import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute} from '@angular/router';
import { IResponse } from 'src/app/ViewModels/iresponse';
import { CartService } from 'src/app/Services/cart.service';
import { WatchListService } from 'src/app/Services/watch-list.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.scss']
})
export class ViewProductByCategoryComponent implements OnInit {
  CatID:number=1;
  show:boolean=true;
  productList:any=[];
  public prdImgsList: any[] = [];

  constructor(private productService:ProductService,private activatedRouter:ActivatedRoute,private cartService:CartService,private watchService:WatchListService) { }

  ngOnInit(): void {
    //this.CatID= Number(this.activatedRouter.snapshot.paramMap.get("id"));
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.CatID=Number(params.get("id"));
      this.fillProductList(this.CatID)
    });
    this.fillProductList(this.CatID);
  
  }
  fillProductList(CatID:number){
    this.productService.getProductsByCatID(CatID).subscribe({
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
