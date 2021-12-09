import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IResponse } from 'src/app/ViewModels/iresponse';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  catList: any[] = [];
  SubcatList: any[] = [];
  CatId: any;
  public cartProdCount: number = 0;


  constructor(private activatedRoute: ActivatedRoute, private ProductService: ProductService,
    private route: Router, private cartService: CartService) { }


  ngOnInit(): void {
    this.ProductService.getAllCategory().subscribe({
      next: (Response: IResponse) => {
        console.log(Response);
        this.catList = Response["data"];
      }
    });

    this.ProductService.getAllSubCategory().subscribe({
      next: (Response: IResponse) => {
        console.log(Response);
        this.SubcatList = Response["data"];
      }
    });

    this.cartService.getProducts()
      .subscribe(res => {
        this.cartProdCount = res.length;
      })
  }

}
