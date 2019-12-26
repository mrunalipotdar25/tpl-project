import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicalmakePageRoutingModule } from './vehicalmake-routing.module';

import { VehicalmakePage } from './vehicalmake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicalmakePageRoutingModule
  ],
  declarations: [VehicalmakePage]
})
export class VehicalmakePageModule {}
