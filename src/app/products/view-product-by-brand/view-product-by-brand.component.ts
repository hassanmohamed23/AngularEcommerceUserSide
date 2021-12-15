import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { WatchListService } from 'src/app/Services/watch-list.service';
import { IResponse } from 'src/app/ViewModels/iresponse';

@Component({
  selector: 'app-view-product-by-brand',
  templateUrl: './view-product-by-brand.component.html',
  styleUrls: ['./view-product-by-brand.component.scss']
})
export class ViewProductByBrandComponent implements OnInit {

  subCatID:number=1;
  productList: any = [];
  brandList: any[] = [];

  constructor(private productService: ProductService, private activatedRouter: ActivatedRoute, 
              private cartService: CartService, private watchService: WatchListService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params) => {
      this.subCatID = Number(params.get("id"));
      this.fillProductList(this.subCatID)
    });


  }
  fillProductList(CatID: number) {
    this.productService.getProductsByBrandID(CatID).subscribe({
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
          this.productService.getAllBrands().subscribe({
            next: (Response: IResponse) => {
              console.log(Response);
              this.brandList = Response["data"];
            }
          });

        })
      }
    });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  addtowatct(item: any) {
    this.watchService.addtowatch(item);
  }

}
