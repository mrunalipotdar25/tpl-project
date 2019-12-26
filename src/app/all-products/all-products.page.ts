import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {

  constructor(private router: Router) { }

  productpage()
  {
    this.router.navigate(['/products']);
  }

  vechicalmakepage()
  {
    this.router.navigate(['/vehicalmake']);
  }
  ngOnInit() {
  }

  
}
