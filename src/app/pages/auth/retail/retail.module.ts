import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailRoutingModule } from './retail-routing.module';
import { RetailComponent } from './retail.component';
import { PrimengModule } from 'src/app/modules/primeng.modules';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RetailComponent],
  imports: [
    CommonModule,
    RetailRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class RetailModule { }
