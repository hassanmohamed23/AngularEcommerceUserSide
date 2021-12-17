import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  ordersList: any[]=[];
  userID=Number(sessionStorage.getItem("userID"));
  constructor(private userService: UserService, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getUserOrders(this.userID)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.ordersList = res.data;
        }
      });
  }

}
