import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicalByPricePageRoutingModule } from './vehical-by-price-routing.module';

import { VehicalByPricePage } from './vehical-by-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicalByPricePageRoutingModule
  ],
  declarations: [VehicalByPricePage]
})
export class VehicalByPricePageModule {}
