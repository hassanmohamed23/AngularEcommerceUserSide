import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBrand } from '../ViewModels/ibrand';
import { ICategory } from '../ViewModels/icategory';
import { IComment } from '../ViewModels/icomment';
import { IProduct } from '../ViewModels/iproduct';
import { IResponse } from '../ViewModels/iresponse';
import { ISubCategory } from '../ViewModels/isub-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpservice:HttpClient) { }
  //-----------------------------------------------------------
  //Get All Products
  getAllProducts():Observable<IResponse>
  {
    const httpheader={
      headers:new HttpHeaders,
      'content-type': 'application/JSON'
    } 
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Product`);
  }
  //-----------------------------------------------------------
  //Get Product BY ID 
  getProductByID(prdID:number):Observable<IProduct>
  {
    
    return this.httpservice.get<any>(`${environment.APIURL}/Product/${prdID}`);
  }
   //-----------------------------------------------------------
  //Get Products BY Category ID
  getProductsByCatID(CatID:number):Observable<IProduct[]>
  {
    return this.httpservice.get<IProduct[]>(`${environment.APIURL}/ProductByCatID/${CatID}`);
  }
  //-----------------------------------------------------------
  //Get Products BY SubCategory ID
  getProductsBySubCatID(SubCatID:number):Observable<IProduct[]>
  {
    return this.httpservice.get<IProduct[]>(`${environment.APIURL}/ProductBySubCat​/${SubCatID}`);
  }
  //-----------------------------------------------------------
  //Get Products BY Brand ID
  getProductsByBrandID(BrandID:number):Observable<IProduct[]>
  {
    return this.httpservice.get<IProduct[]>(`${environment.APIURL}​/ProductByBrandId​/${BrandID}`);
  }
  //-----------------------------------------------------------
  //Get All Categorys 
  getAllCategory():Observable<ICategory[]>
  {
    return this.httpservice.get<ICategory[]>(`${environment.APIURL}/Category`);
  }
   //-----------------------------------------------------------
  //Get All SubCategorys 
  getAllSubCategory():Observable<ISubCategory[]>
  {
    return this.httpservice.get<ISubCategory[]>(`${environment.APIURL}/SubCategory`);
  }
   //-----------------------------------------------------------
  //Get All Brands 
  getAllBrands():Observable<IBrand[]>
  {
    return this.httpservice.get<IBrand[]>(`${environment.APIURL}/Brands`);
  }
   //-----------------------------------------------------------
  //Get All Comments By Product ID
  getAllComment(PrdID:number):Observable<IComment[]>
  {
    return this.httpservice.get<IComment[]>(`${environment.APIURL}/Comments/${PrdID}`);
  }



}
