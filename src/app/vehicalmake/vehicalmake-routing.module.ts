import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicalmakePage } from './vehicalmake.page';

const routes: Routes = [
  {
    path: '',
    component: VehicalmakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicalmakePageRoutingModule {}
