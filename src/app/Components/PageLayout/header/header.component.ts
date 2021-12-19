import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { IResponse } from 'src/app/ViewModels/iresponse';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';
import { WatchListService } from 'src/app/Services/watch-list.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup = {} as FormGroup; 
  catList: any[] = [];
  SubcatList: any[] = [];
  brandList: any[] = [];
  public userName:any="";
  CatId: any;
  public cartProdCount: number = 0;
  public watchProdCount: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private ProductService: ProductService,
    private route: Router, private cartService: CartService,private watchlService:WatchListService,
    private formBuilder: FormBuilder,private router: Router,
   private userSer:UserService) { }


  ngOnInit(): void {
    this.userSer.getUserName().subscribe(res => {
      this.userName = res;
    });
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
  signout(){
   this.userSer.logout();
   
  }

}
