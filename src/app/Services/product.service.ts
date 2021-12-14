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
  getProductByID(prdID:number):Observable<IResponse>
  {
    
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Product/${prdID}`);
  }
  getProductImgByID(prdID:number):Observable<IResponse>
  {
    
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Productimg/${prdID}`);
  }
   //-----------------------------------------------------------
  //Get Products BY Category ID
  getProductsByCatID(CatID:number):Observable<IResponse>
  {
    const httpheader={
      headers:new HttpHeaders,
      'content-type': 'application/JSON'
    } 
    return this.httpservice.get<IResponse>(`${environment.APIURL}/ProductByCatID/${CatID}`);
  }
  //-----------------------------------------------------------
  //Get Products BY SubCategory ID
  getProductsBySubCatID(SubCatID:number):Observable<IResponse>
  {
    const httpheader={
      headers:new HttpHeaders,
      'content-type': 'application/JSON'
    } 
    return this.httpservice.get<IResponse>(`${environment.APIURL}/ProductBySubCat/${SubCatID}`);
  }
  //-----------------------------------------------------------
  //Get Products BY Brand ID
  getProductsByBrandID(BrandID:number):Observable<IResponse>
  {
    const httpheader={
      headers:new HttpHeaders,
      'content-type': 'application/JSON'
    } 
    return this.httpservice.get<IResponse>(`${environment.APIURL}​/ProductByBrandId/${BrandID}`);
  }
  //-----------------------------------------------------------
  //Get All Categorys 
  getAllCategory():Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Category`);
  }
   //-----------------------------------------------------------
  //Get All SubCategorys 
  getAllSubCategory():Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.APIURL}/SubCategory`);
  }
  getSubCatByCatID(CatID:number):Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.APIURL}/SubCategoryByCatId/${CatID}`);
  }
   //-----------------------------------------------------------
  //Get All Brands 
  getAllBrands():Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Brands`);
  }
   //-----------------------------------------------------------
  //Get All Comments By Product ID
  getAllComment(PrdID:number):Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Comments/${PrdID}`);
  }

  getProductOfferByID(prdID:number):Observable<IResponse>
  {
    
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Offers/${prdID}`);
  }


}
