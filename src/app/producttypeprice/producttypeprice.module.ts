import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducttypepricePageRoutingModule } from './producttypeprice-routing.module';

import { ProducttypepricePage } from './producttypeprice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducttypepricePageRoutingModule
  ],
  declarations: [ProducttypepricePage]
})
export class ProducttypepricePageModule {}
