import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  CatID:number=1;
  show:boolean=true;
  product:any;
  constructor(private productService:ProductService,
    private activatedRouter:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    //this.CatID= Number(this.activatedRouter.snapshot.paramMap.get("id"));
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.CatID=Number(params.get("id"));
      this.fillProductList(this.CatID)
    });
    this.fillProductList(this.CatID);
  
  }
  fillProductList(CatID:number){
    this.productService.getProductByID(CatID).subscribe({
      next:(res)=>{this.product=res.data}
    });
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}