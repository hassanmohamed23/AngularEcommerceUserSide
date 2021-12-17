import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let userID = Number(sessionStorage.getItem("userID"));
    this.userService.getUserInfo(userID)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.user = res;
        }
      });

  }

}
