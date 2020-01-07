import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.page.html',
  styleUrls: ['./pricelist.page.scss'],
})
export class PricelistPage implements OnInit {
 Products:any;
  constructor(private router:Router,public route:ActivatedRoute,public restProvider:RestService)
  {

   }

  ngOnInit() {
  
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('productId'))
      {
        return;
      }
      const productId=paramMap.get('productId');
 
      this.restProvider.getProduct(Number(productId)).then(data=>{
        this.Products=data;
      
      })
    });
  }

 productpage()
  {
      this.router.navigate((['/allpricelist']));
  }

  
  vechicalmakepage()
  {
    this.router.navigate(['/vehicalmake1']);
  }
  

}
