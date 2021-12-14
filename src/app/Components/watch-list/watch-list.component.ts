import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchListService } from 'src/app/Services/watch-list.service';
import { IResponse } from 'src/app/ViewModels/iresponse';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  public productList : any = [];
  public prdImgsList : any = [];

  public products : any = [];
  public product : any = [];
  public grandTotal !: number;
  public img="https://i.ibb.co/L8Nrb7p/1.jpg"
  constructor(private watchService : WatchListService,
    private ProductService: ProductService, private route: Router,
    private cartService:CartService
    ) { }

  ngOnInit(): void {
    this.watchService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.productList = res;

      this.grandTotal = this.watchService.getTotalPrice();
      this.productList.forEach((product:any,index:number)=>{
        this.ProductService.getProductImgByID(product.productId).subscribe({
          next: (Response: IResponse) => {

            this.prdImgsList[index] = Response.data[0];
          }
        })
    })
    })

  }
  removeItem(item: any){
    this.watchService.removeCartItem(item);
  }
  emptywatch(){
    this.watchService.removeAllCart();
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
