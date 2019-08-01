import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiginRoutingModule } from './sigin-routing.module';
import { SiginComponent } from './sigin.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';


@NgModule({
  declarations: [
    SiginComponent
  ],
  imports: [
    CommonModule,
    SiginRoutingModule,
    FormsModule,
    PrimengModule
  ]
})
export class SiginModule { }
