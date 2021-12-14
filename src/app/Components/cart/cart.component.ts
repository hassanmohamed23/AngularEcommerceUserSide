import { Component, OnInit } from '@angular/core';
import { EMPTY, EmptyError } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
import { WatchListService } from 'src/app/Services/watch-list.service';
import { ProductService } from 'src/app/Services/product.service';
import { IResponse } from 'src/app/ViewModels/iresponse';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public productList : any = [];
 // public prdImgsList : any = [];

  public grandTotal !: number;
  constructor(private cartService : CartService, private watchService:WatchListService,
    private ProductService:ProductService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.productList = res;
      this.grandTotal = this.cartService.getTotalPrice();
    //   this.productList.forEach((product:any,index:number)=>{
    //     this.ProductService.getProductImgByID(product.productId).subscribe({
    //       next: (Response: IResponse) => {

    //         this.prdImgsList[index] = Response.data[0];
    //       }
    //     })
    // })
  })
}

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  addtowatct(item: any){
    this.watchService.addtowatch(item);
  }
}
