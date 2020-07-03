import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedBookingPageRoutingModule } from './approved-booking-routing.module';

import { ApprovedBookingPage } from './approved-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedBookingPageRoutingModule
  ],
  declarations: [ApprovedBookingPage]
})
export class ApprovedBookingPageModule {}
