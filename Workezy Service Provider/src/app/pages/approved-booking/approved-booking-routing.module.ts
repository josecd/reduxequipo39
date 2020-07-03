import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovedBookingPage } from './approved-booking.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovedBookingPageRoutingModule {}
