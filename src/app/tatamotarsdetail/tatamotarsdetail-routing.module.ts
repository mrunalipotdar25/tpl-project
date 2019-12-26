import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TatamotarsdetailPage } from './tatamotarsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: TatamotarsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TatamotarsdetailPageRoutingModule {}
