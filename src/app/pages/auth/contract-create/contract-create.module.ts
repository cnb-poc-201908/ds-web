import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractCreateRoutingModule } from './contract-create-routing.module';
import { ContractCreateComponent } from './contract-create.component';


@NgModule({
  declarations: [ContractCreateComponent],
  imports: [
    CommonModule,
    ContractCreateRoutingModule
  ]
})
export class ContractCreateModule { }
