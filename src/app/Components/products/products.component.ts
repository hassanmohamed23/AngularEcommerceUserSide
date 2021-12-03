import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IResponse } from 'src/app/ViewModels/iresponse';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
 
  prdList:IProduct[]=[] ;

  constructor(private ProductService:ProductService) {
  //this.Response={Message="" ,isSucess=false ,Data={}as object}

   }
  



  ngOnInit(): void {

    this.ProductService.getAllProducts().subscribe({
      next:(Response:IResponse)=>{
        this.prdList=Response["data"];
        console.log(this.prdList);
     //this.prdList=this.Response["data"] ;
 
      }
      
    });


  
  }

}
