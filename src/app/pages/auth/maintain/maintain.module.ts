import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintainRoutingModule } from './maintain-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';
import { MaintainComponent } from './maintain.component';


@NgModule({
  declarations: [
    MaintainComponent
  ],
  imports: [
    CommonModule,
    MaintainRoutingModule,
    FormsModule,
    PrimengModule,
  ]
})
export class MaintainModule { }
