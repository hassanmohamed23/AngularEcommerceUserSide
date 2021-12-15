import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { CartService } from '../Services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {


  public productList : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { 
      
      
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
      value:this.cartService.getTotalPrice().toString(),
      onApprove:(details)=>{
        alert("succees pay");
      }
    });
  }
  
}
