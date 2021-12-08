import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.scss']
})
export class ViewProductByCategoryComponent implements OnInit {
  CatID:number=1;
  show:boolean=true;
  productShowList:any=[]
  constructor(private productService:ProductService,private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    //this.CatID= Number(this.activatedRouter.snapshot.paramMap.get("id"));
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.CatID=Number(params.get("id"));
      this.fillProductList(this.CatID)
    });
    this.fillProductList(this.CatID);
  
  }
  fillProductList(CatID:number){
    this.productService.getProductsByCatID(CatID).subscribe({
      next:(res)=>{this.productShowList=res.data}
    });
  }

}
