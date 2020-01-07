import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehical-by-price',
  templateUrl: './vehical-by-price.page.html',
  styleUrls: ['./vehical-by-price.page.scss'],
})
export class VehicalByPricePage implements OnInit {

  Products :any;
  Vehicals :any;
  constructor(public restProvider:RestService,private route: Router,public router:ActivatedRoute) 
  { 
    
  }

  ngOnInit() {

    this.router.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('kbno'))
      {
        return;
      }
      const kbno=paramMap.get('kbno');

      this.restProvider.getproductbyVehicle(String(kbno)).then(data=>{
        this.Products=data;
     
      })
    });

   
  }


  vehiclename()
  {
   
  }
}
