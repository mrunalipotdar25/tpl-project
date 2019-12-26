import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllpricelistPageRoutingModule } from './allpricelist-routing.module';

import { AllpricelistPage } from './allpricelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllpricelistPageRoutingModule
  ],
  declarations: [AllpricelistPage]
})
export class AllpricelistPageModule {}
