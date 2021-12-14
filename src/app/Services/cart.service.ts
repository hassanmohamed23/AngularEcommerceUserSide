import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public cartCount = 0;
  public countObserv = new BehaviorSubject<number>(0);
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }
  getCounter(){
    return this.countObserv.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    var index = this.cartItemList.findIndex(function (prd: any) {
      return prd.productId === product.productId;
    })
    console.log(index);
    if (index !== -1) {
      this.cartItemList[index].count += 1;
      this.cartCount++;
    }
    else {
      product["count"] = 1;
      this.cartItemList.push(product);
      this.cartCount++;
    }
    //this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.countObserv.next(this.cartCount);
    console.log(this.cartItemList)
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      if (a.offer != undefined) { grandTotal += a.offer.newPrice * a.count; }
      else { grandTotal += a.price * a.count; }
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    // this.cartItemList.map((a:any, index:any)=>{
    //   if(product.id=== a.id){
    //     this.cartItemList.splice(index,1);
    //   }
    // })
    let index = this.cartItemList.findIndex(function (prd: any) {
      return  prd.productId === product.productId;
    })
    if (index !== -1) {
      if (this.cartItemList[index].count > 1) {
        this.cartItemList[index].count-=1;
        this.cartCount--;
      }
      else {
        this.cartItemList.splice(index, 1);
        this.cartCount--;
      }
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.countObserv.next(this.cartCount);
  }
  removeAllCart() {
    this.cartItemList = []
    this.cartCount=0;
    this.productList.next(this.cartItemList);
    this.countObserv.next(this.cartCount);

  }
}
