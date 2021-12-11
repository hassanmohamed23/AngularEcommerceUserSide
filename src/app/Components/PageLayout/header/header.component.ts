import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IResponse } from 'src/app/ViewModels/iresponse';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';
import { WatchListService } from 'src/app/Services/watch-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  catList: any[] = [];
  SubcatList: any[] = [];
  brandList: any[] = [];

  CatId: any;
  public cartProdCount: number = 0;
  public watchProdCount: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private ProductService: ProductService,
    private route: Router, private cartService: CartService,private watchlService:WatchListService) { }


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
    this.ProductService.getAllBrands().subscribe({
      next: (Response: IResponse) => {
        console.log(Response);
        this.brandList = Response["data"];
      }
    });

    this.cartService.getProducts()
      .subscribe(res => {
        this.cartProdCount = res.length;
      })
      this.watchlService.getProducts()
      .subscribe(res => {
        this.watchProdCount = res.length;
      })
  }

}
