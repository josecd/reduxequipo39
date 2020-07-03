import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetTimePage } from './set-time.page';

const routes: Routes = [
  {
    path: '',
    component: SetTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetTimePageRoutingModule {}
