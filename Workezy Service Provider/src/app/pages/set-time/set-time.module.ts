import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetTimePageRoutingModule } from './set-time-routing.module';

import { SetTimePage } from './set-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetTimePageRoutingModule
  ],
  declarations: [SetTimePage]
})
export class SetTimePageModule {}
