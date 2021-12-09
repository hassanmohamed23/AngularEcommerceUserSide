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


  prdList: any[] = [];
  prdimg: any[] = [];
  catList: any[] = [];
  constructor(private ProductService: ProductService, private route: Router,
    private cartService:CartService) {


  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.ProductService.getAllCategory().subscribe({
  //     next:(Response:any)=>{
  //       console.log(Response);
  //      // this.catList=Response;
  //     }
  //   });
  // }

  ngOnInit(): void {


    this.ProductService.getAllProducts().subscribe({
      next: (Response: IResponse) => {
        console.log(Response);
        this.prdList = Response["data"];
        this.getProductImgs();
        console.log(this.prdimg)
      }
    });
  }

  getProductImgs(){
    this.prdList.forEach((p,index)=>{
      this.ProductService.getProductImgByID(p.id).subscribe({
        next: (Response: IResponse) => {
          console.log(Response);
          this.prdimg[index] = Response["data"][0];
        }
      })
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
