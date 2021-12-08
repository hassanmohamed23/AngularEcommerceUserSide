import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
ProductId=0;
sntProdID: number=0;
product:any;
productImages:any;
  constructor(private activatedRouter:ActivatedRoute
    , private productService:ProductService
    , private router:Router
    , private location:Location) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.sntProdID=Number(params.get("id"));
      this.fillProductData();
  })
}

fillProductData(){
  this.productService.getProductByID(this.sntProdID).subscribe({
    next:(Response)=>{this.product=Response.data;
      //console.log(this.product);
    }});
    // this.productService.getProductImgByID(this.sntProdID).subscribe({
    //   next:(Response)=>{this.productImages=Response.data;
    //     //console.log(this.productImages);
    //   }});;
}
}

