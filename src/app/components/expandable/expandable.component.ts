import { Component, ViewChild, Input, ElementRef, Renderer, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestService} from '../../rest.service';
@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {

  accordionExapanded = true;
  @ViewChild('cc', {static: true}) cardContent: any;
@Input('title') title:string;
  Products: any;
  constructor(public renderer: Renderer,public router:ActivatedRoute,public restProvider:RestService) { }

  ngOnInit() {
    this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 16px");

     
        
        this.restProvider.getcat(this.title).then(data=>{
          this.Products=data;
      
        })
    
    }
​

  toggleAccordion() {
     if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "13px 16px");
​
     } else {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 16px");
       
​
     }
​
     this.accordionExapanded = !this.accordionExapanded;
    // this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
​
  }


}
