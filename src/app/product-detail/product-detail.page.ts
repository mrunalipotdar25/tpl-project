import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  Products:any;
  Vehicles :any;

  constructor(public navCtrl:NavController,public restProvider:RestService,public route:ActivatedRoute) 
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

}
