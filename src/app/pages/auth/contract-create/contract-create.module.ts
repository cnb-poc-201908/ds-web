import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContractCreateRoutingModule } from './contract-create-routing.module';
import { ContractCreateComponent } from './contract-create.component';
import { PrimengModule } from 'src/app/modules/primeng.modules';

@NgModule({
  declarations: [ContractCreateComponent],
  imports: [
    CommonModule,
    ContractCreateRoutingModule,
    FormsModule,
    PrimengModule
  ]
})
export class ContractCreateModule { }
