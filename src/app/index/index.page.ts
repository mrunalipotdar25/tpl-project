import { Component, OnInit, APP_INITIALIZER, ViewChild, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {RestService} from '../rest.service';
import {searchpage} from './index.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  @ViewChild("cc",{static: true}) cardContent: any;
  accordionExapanded = false;
//  lista: searchpage[];
lista:any;
listsecondComapny:any;
listVehicle:any;
  Users:any;
  userId:any;
  productdata:any;
  companies:any;
  vehicles:any;
  constructor(private router:Router,public restProvider:RestService,public route:ActivatedRoute,public renderer: Renderer) 
  { 
    this.Username();
    this. Productname();
   // this.gocompany();

  }


  Intializer()
  {
    this.lista=this.productdata;
    this.listsecondComapny=this.companies;
    this.listVehicle=this.vehicles;

  }

  getItems(ev: any)
  {
    
 //  this.Username();
    const val = ev.target.value;
    if(val && val.trim() !=='')
    {
      this.Intializer();
      this.lista= this.lista.filter((item)=> {
     
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      this.listsecondComapny= this.listsecondComapny.filter((item1)=> {
     
        return (item1.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      this.listVehicle= this.listVehicle.filter((item1)=> {
     
        return (item1.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      
    }

    
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
     
//          this.Intializer();
      
    });
  }

 Productname()
  {
    this.restProvider.getprod().then(data=>{
      this.productdata=data;
    
    });

    this.restProvider.getVehical().then(data=>{
      this.vehicles=data;
   
    });

    this.restProvider.Companypage().then(data=>{
      this.companies=data;
    
    });

  }

  
  ngOnInit() {
    
      this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('Name'))
      {
        return;
      }
       this.userId=paramMap.get('Name');
  
     
});
  
       //this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion()
  {
    if(this.accordionExapanded)
    {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 16px");
    }
    else{
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "13px 16px");
    }
    this.accordionExapanded = !this.accordionExapanded;
  }

 /* gocompany(){
    this.router.navigate(['/vehicalmake']);
  }*/
}
