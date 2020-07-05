import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductScanPageRoutingModule } from './product-scan-routing.module';

import { ProductScanPage } from './product-scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductScanPageRoutingModule
  ],
  declarations: [ProductScanPage]
})
export class ProductScanPageModule {}
