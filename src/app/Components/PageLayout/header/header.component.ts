import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { IResponse } from 'src/app/ViewModels/iresponse';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';
import { WatchListService } from 'src/app/Services/watch-list.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup = {} as FormGroup; 
  catList: any[] = [];
  SubcatList: any[] = [];
  brandList: any[] = [];

  CatId: any;
  public cartProdCount: number = 0;
  public watchProdCount: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private ProductService: ProductService,
    private route: Router, private cartService: CartService,private watchlService:WatchListService,
    private formBuilder: FormBuilder,private router: Router) { }


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchInput: ['']
    });

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

    this.cartService.getCounter()
      .subscribe(res => {
        this.cartProdCount = res;
      })
      this.watchlService.getProducts()
      .subscribe(res => {
        this.watchProdCount = res.length;
      })
  }

  onSubmit() {
    console.log(this.searchForm.get("searchInput")?.value);
    let searchText=this.searchForm.get("searchInput")?.value;
    if(searchText !=""){
      this.router.navigate(['/products/search', searchText]);
    }
  }

}
