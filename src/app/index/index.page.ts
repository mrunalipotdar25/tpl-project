import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  Users:any;
  constructor(private router:Router,public restProvider:RestService) 
  { 
    this.Username();
  }

  allprod()
  {
    this.router.navigate(['/all-products']);
  }

  pricelist()
  {
    this.router.navigate(['/pricelist']);
  }

  Username()
  {
    this.restProvider.userpage().then(data=>{
      this.Users=data;
      console.log(this.Users);
    });
  }
  ngOnInit() {
  }


}
