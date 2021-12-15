import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {


  public productList : any = [];
  public grandTotal !: number;
  userID=Number(sessionStorage.getItem("userID"));
  userAddress="sohag";
  constructor(private cartService : CartService,private productService:ProductService) { 
      
      
    }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.productList = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    render({
      id:"#paymentButtons",
      currency:"EGP",
      value:"5",//this.cartService.getTotalPrice().toString(),
      onApprove:(details)=>{
        this.productService.addOrder(this.grandTotal,this.userID,this.userAddress)
        .subscribe({
          next: (res) => {
            console.log(res);
            // this.afterLoginResp(res);
          }, error: (error) => {
            console.log(error);
            // this.validationMsg = "error occured try again"
          }
        });
      }
    });
  }
  
  addOrder(totalPrice:number, userID:number, userAddress:string=""){
    this.productService.addOrder(totalPrice, userID, userAddress);
  }
}
