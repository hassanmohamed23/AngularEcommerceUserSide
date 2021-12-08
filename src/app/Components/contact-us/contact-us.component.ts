import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {

  constructor() {
    
   }
  name:string="";
  email:string="";
  message:string="";
  ngOnInit(): void {
   
  }
  submitForm()
  {
    alert("Your Enter A Message We Well Contact With You");
  } 
}
