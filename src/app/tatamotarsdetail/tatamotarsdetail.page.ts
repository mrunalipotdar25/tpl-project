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

  VehicleId:any;
  Products:any;
  Vehicles:any;
 // categories =['Light Duty','Medium Duty','High Duty'];
  Companies:any;
  Companiesas:any;
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
      this.VehicleId=paramMap.get('VehicleId');
   

    
    this.restProvider.getCompany(Number(this.VehicleId)).then(data=>{
      this.Companies=data;
     
     
      });
      this.getDuty('Light Duty');
    });
   
  }

  getDuty(type : string)
  {
    this.restProvider.getType(Number(this.VehicleId),type).then(data=>{
      this.Companiesas=data;
   
      });
  }


}
