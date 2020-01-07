import { Component, OnInit,Renderer,QueryList, ElementRef, ViewChildren, Renderer2, ViewChild, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestService} from '../rest.service';
import {searchpage} from './allprice.model';

@Component({
  selector: 'app-allpricelist',
  templateUrl: './allpricelist.page.html',
  styleUrls: ['./allpricelist.page.scss'],
})
export class AllpricelistPage implements OnInit {


  Products:any;
  productdata:any;
  visible = false;
  toggle() {
   this.visible = !this.visible;
  }
  
  constructor(public route:ActivatedRoute,public restProvider:RestService,public renderer:Renderer) 
  { 
  }

 
  ngOnInit() {
  
  
   this.restProvider.getCategeory().then(data=>{
    this.Products=data;
  
  });
  }

   



 
}
