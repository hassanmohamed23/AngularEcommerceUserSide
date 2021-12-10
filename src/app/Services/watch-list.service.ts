import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  public watchItemList : any =[]
  public watchList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }
  getProducts(){
    return this.watchList.asObservable();
  }

  setProduct(product : any){
    this.watchItemList.push(...product);
    this.watchList.next(product);
  }
  addtowatch(product : any){
    this.watchItemList.push(product);
    this.watchList.next(this.watchItemList);
    this.getTotalPrice();
    console.log(this.watchItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.watchItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.watchItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.watchItemList.splice(index,1);
      }
    })
    this.watchList.next(this.watchItemList);
  }
  removeAllCart(){
    this.watchItemList = []
    this.watchList.next(this.watchItemList);
  }
}
