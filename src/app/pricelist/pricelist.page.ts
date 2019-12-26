import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.page.html',
  styleUrls: ['./pricelist.page.scss'],
})
export class PricelistPage implements OnInit {

  constructor(private route:Router)
  {

   }

  ngOnInit() {
  }

  productpage()
  {
      this.route.navigate((['\allpricelist']));
  }

}
