import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TatamotarsdetailPageRoutingModule } from './tatamotarsdetail-routing.module';

import { TatamotarsdetailPage } from './tatamotarsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TatamotarsdetailPageRoutingModule
  ],
  declarations: [TatamotarsdetailPage]
})
export class TatamotarsdetailPageModule {}
