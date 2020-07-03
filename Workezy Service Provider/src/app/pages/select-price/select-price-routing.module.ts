import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPricePage } from './select-price.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPricePageRoutingModule {}
