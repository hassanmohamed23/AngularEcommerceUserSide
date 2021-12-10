import { Component, OnInit } from '@angular/core';
import { EMPTY, EmptyError } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
import { WatchListService } from 'src/app/Services/watch-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public product : any = [];
  public grandTotal !: number;
  public img="https://i.ibb.co/L8Nrb7p/1.jpg"
  constructor(private cartService : CartService, private watchService:WatchListService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
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
