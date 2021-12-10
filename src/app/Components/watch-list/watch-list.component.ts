import { Component, OnInit } from '@angular/core';
import { WatchListService } from 'src/app/Services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.sass']
})
export class WatchListComponent implements OnInit {
  public products : any = [];
  public product : any = [];
  public grandTotal !: number;
  public img="https://i.ibb.co/L8Nrb7p/1.jpg"
  constructor(private watchService : WatchListService) { }

  ngOnInit(): void {
    this.watchService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.watchService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.watchService.removeCartItem(item);
  }
  emptywatch(){
    this.watchService.removeAllCart();
  }

}
