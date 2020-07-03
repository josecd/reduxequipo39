import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPricePageRoutingModule } from './select-price-routing.module';

import { SelectPricePage } from './select-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPricePageRoutingModule
  ],
  declarations: [SelectPricePage]
})
export class SelectPricePageModule {}
