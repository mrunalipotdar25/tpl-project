import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tatalptdetail',
  templateUrl: './tatalptdetail.page.html',
  styleUrls: ['./tatalptdetail.page.scss'],
})
export class TatalptdetailPage implements OnInit {

  Products:any;
  constructor(public restProvider:RestService,private route: Router,public router:ActivatedRoute) 
  {
  
   }

  

   productdetail()
   {
      this.route.navigate(['/product-detail']);
   }
  ngOnInit() {

    this.router.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('kbno'))
      {
        return;
      }
      const kbno=paramMap.get('kbno');
      console.log(kbno);
      this.restProvider.getproductbyVehicle(kbno).then(data=>{
        this. Products=data;
        console.log(this. Products);
      })
    });
  }



}
