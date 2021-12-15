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

  options ={headers:new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'})}  
  constructor(private httpservice:HttpClient) { }
  //-----------------------------------------------------------
  //Get All Products
  getAllProducts():Observable<IResponse>
  {
    const options ={headers:new HttpHeaders({ 'Content-Type': 'application/json'})};
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'})}  

    //return this.httpservice.get<IResponse>(`${environment.APIURL}/Product`,this.options);
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
    
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Productimg/${prdID}`,this.options);
  }
   //-----------------------------------------------------------
  //Get Products BY Category ID
  getProductsByCatID(CatID:number):Observable<IResponse>
  {
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

  getProductsByBrandID(BrandID:number):Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.APIURL}/ProductByBrandId/${BrandID}`);
  }
  //-----------------------------------------------------------
  //Get All Categorys 
  getAllCategory():Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Category`,this.options);
  }
   //-----------------------------------------------------------
  //Get All SubCategorys 
  getAllSubCategory():Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.APIURL}/SubCategory`,this.options);
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

  getProductRateByID(prdID:number):Observable<IResponse>
  {
    
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Rate/${prdID}`);
  }

  getProductBySearch(search:string):Observable<IResponse>
  {
    
    return this.httpservice.get<IResponse>(`${environment.APIURL}/Search/${search}`);
  }

  addOrder(totalPrice:number=100,userID:number=1,userAddress:string="Sohag",orderDate=Date.now(),orderStatus:string="inShipper"){
    const body=JSON.stringify({
      "totalPrice": totalPrice,
      "userAddress": userAddress,
      "orderDate": orderDate.toString(),
      "orderStatus": orderStatus,
      "userID":userID,
      "shipperId":1
    });
    console.log(body)  
    return this.httpservice.post(`${environment.APIURL}/Order/add`, body,this.options);
  }

  
}
