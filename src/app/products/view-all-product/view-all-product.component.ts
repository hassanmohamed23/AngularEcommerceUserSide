import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IResponse } from 'src/app/ViewModels/iresponse';


@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.scss']
})
export class ViewAllProductComponent implements OnInit,OnChanges {
  
  
  prdList:any[]=[] ;
  prdimg:any[]=[];
  catList:any[]=[];
  constructor(private ProductService:ProductService, private route:Router) 
  {

    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ProductService.getAllCategory().subscribe({
      next:(Response:any)=>{
        console.log(Response);
       // this.catList=Response;
    
      }
      
    });
  }
  
  ngOnInit(): void {
   

 this.ProductService.getAllProducts().subscribe({
  next:(Response:IResponse)=>{
    console.log(Response);
    this.prdList=Response["data"];

  }
  
});
// 

  
  }
  

}
