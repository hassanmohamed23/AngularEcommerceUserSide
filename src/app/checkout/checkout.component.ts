import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  deliveryForm: FormGroup = {} as FormGroup;
  public grandTotal !: number;
  userID=Number(sessionStorage.getItem("userID"));
  constructor(private cartService : CartService,private productService:ProductService,
    private fb: FormBuilder,private router:Router) { 
      
      
    }

  ngOnInit(): void {
    this.deliveryForm = this.fb.group({
      city: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(25)]],
      address: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
    });
    this.cartService.getProducts()
    .subscribe(res=>{
      this.grandTotal = this.cartService.getTotalPrice();
    })
    render({
      id:"#paymentButtons",
      currency:"EGP",
      value:"5",//this.cartService.getTotalPrice().toString(),
      onApprove:(details)=>{
        this.productService.addOrder(this.grandTotal,this.userID,
          this.deliveryForm.get("city")?.value,this.deliveryForm.get("address")?.value,
          this.deliveryForm.get("phone")?.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.cartService.removeAllCart();
            this.router.navigate(['User/Profile']);
            // this.afterLoginResp(res);
          }, error: (error) => {
            console.log(error);
            // this.validationMsg = "error occured try again"
          }
        });
      }
    });
  }
  
}
