import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TatalptdetailPage } from './tatalptdetail.page';

const routes: Routes = [
  {
    path: '',
    component: TatalptdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TatalptdetailPageRoutingModule {}
