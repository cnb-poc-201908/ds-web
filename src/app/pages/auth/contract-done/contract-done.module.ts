import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractDoneRoutingModule } from './contract-done-routing.module';
import { ContractDoneComponent } from './contract-done.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';

@NgModule({
  declarations: [ContractDoneComponent],
  imports: [
    CommonModule,
    ContractDoneRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class ContractDoneModule { }
