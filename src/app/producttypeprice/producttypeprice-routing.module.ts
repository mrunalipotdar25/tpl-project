import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducttypepricePage } from './producttypeprice.page';

const routes: Routes = [
  {
    path: '',
    component: ProducttypepricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducttypepricePageRoutingModule {}
