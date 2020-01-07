import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicalByPricePage } from './vehical-by-price.page';

const routes: Routes = [
  {
    path: '',
    component: VehicalByPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicalByPricePageRoutingModule {}
