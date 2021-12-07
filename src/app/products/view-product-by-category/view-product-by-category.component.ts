import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.scss']
})
export class ViewProductByCategoryComponent implements OnInit {

  constructor(private CatService:ProductService) { }

  ngOnInit(): void {
    // this.CatService.().subscribe({
    //   next:(Response:IResponse)=>{
    //     console.log(Response);
    //     this.prdList=Response["data"];
    //     //console.log(this.prdList);
    //  //this.prdList=this.Response["data"] ;
    
    //   }
      
    // });
  }

}
