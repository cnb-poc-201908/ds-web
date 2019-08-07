import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailRoutingModule } from './retail-routing.module';
import { RetailComponent } from './retail.component';


@NgModule({
  declarations: [RetailComponent],
  imports: [
    CommonModule,
    RetailRoutingModule
  ]
})
export class RetailModule { }
