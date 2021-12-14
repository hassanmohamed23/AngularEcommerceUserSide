import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { WatchListService } from 'src/app/Services/watch-list.service';
import { IResponse } from 'src/app/ViewModels/iresponse';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public productList: any[] = [];
  searchStr="";
  constructor(private productService: ProductService, private route: Router,
    private cartService:CartService,private activatedRouter: ActivatedRoute,
    private watchService:WatchListService) {


  }
  

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params) => {
      this.searchStr = String(params.get("str"));
      console.log(this.searchStr);
      this.fillProductList(this.searchStr)
    });
    
  }

  fillProductList(searchStr: string) {
    this.productService.getProductBySearch(searchStr).subscribe({
      next: (Response: IResponse) => {

        this.productList = Response["data"];

        this.productList.forEach((product: any, index: any) => {
          this.productService.getProductImgByID(product.productId).subscribe({
            next: (Response: IResponse) => {

              product["img"]=Response.data[0];
            }
          })

          this.productService.getProductRateByID(product.productId).subscribe({
            next: (Response: IResponse) => {
              console.log(Response);
              product["rate"] = Response.data;
            }
          })

          this.productService.getProductOfferByID(product.productId).subscribe({
            next: (Response: IResponse) => {
              console.log(Response);
              product["offer"] = Response.data[0];
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
