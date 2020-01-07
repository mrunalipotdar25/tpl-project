import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-vehicalmake',
  templateUrl: './vehicalmake.page.html',
  styleUrls: ['./vehicalmake.page.scss'],
})
export class VehicalmakePage implements OnInit {

  Companies:any;
  constructor(private router:Router,public restProvider:RestService) {
    this.companyname();
   }

  tatavehical()
  {
      this.router.navigate(['/tatamotarsdetail']);
  }

 companyname()
  {
    this.restProvider.Companypage().then(data=>{
      this.Companies=data;
    
    });
  }
  ngOnInit() {
  }

}
