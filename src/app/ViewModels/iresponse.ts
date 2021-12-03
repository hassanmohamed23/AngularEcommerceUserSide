import { IProduct } from "./iproduct";

export interface IResponse {

    isSucess:boolean;
    message:string;
    data:IProduct[];
    
}
