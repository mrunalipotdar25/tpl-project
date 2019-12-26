import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TatalptdetailPageRoutingModule } from './tatalptdetail-routing.module';

import { TatalptdetailPage } from './tatalptdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TatalptdetailPageRoutingModule
  ],
  declarations: [TatalptdetailPage]
})
export class TatalptdetailPageModule {}
