import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {RestService} from '../rest.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tatamotarsdetail',
  templateUrl: './tatamotarsdetail.page.html',
  styleUrls: ['./tatamotarsdetail.page.scss'],
})
export class TatamotarsdetailPage implements OnInit {

  Products:any;
  Vehicles:any;
  categories =['Light Duty','Medium Duty','High Duty'];
  
  constructor(private route:Router,public restProvider:RestService,public router:ActivatedRoute,public http:HttpClient) 
  {
   // this.getProducts();
    //this.getVehicles();
   }

  tatalptpage()
  {
      this.route.navigate(['/tatalptdetail']);
  }
  ngOnInit() {

    this.router.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('VehicleId'))
      {
        return;
      }
      const VehicleId=paramMap.get('VehicleId');
      console.log(VehicleId);
      this.restProvider.getvehi(Number(VehicleId)).then(data=>{
        this.Vehicles=data;
        console.log(this.Vehicles);
      })
    });
   
  }

  // getProducts()
  // {
  //   this.restProvider.getProduct().then(data=>{
  //     this.Products=data;
  //     console.log(this.Products);
  //   });
  // }

  // getVehicles()
  // {
  //   this.restProvider.getVehical().then(data=>{
  //     this.Vehicles=data;
  //     console.log(this.Vehicles);
  //   });
  // }




}
