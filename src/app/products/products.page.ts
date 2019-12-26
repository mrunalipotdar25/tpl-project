import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  Products:any;
  constructor(private router:Router,public restProvider:RestService) { 
    this.getProduct();
  }

 
getProduct()
  {
    this.restProvider.getprod().then(data=>{
      this.Products=data;
      console.log(this.Products);
    });
  }

 
  ngOnInit() {
  }



}
