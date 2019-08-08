import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContractPrintRoutingModule } from './contract-print-routing.module';
import { ContractPrintComponent } from './contract-print.component';
import { PrimengModule } from 'src/app/modules/primeng.modules';


@NgModule({
  declarations: [ContractPrintComponent],
  imports: [
    CommonModule,
    ContractPrintRoutingModule,
    FormsModule,
    PrimengModule
  ]
})
export class ContractPrintModule { }
