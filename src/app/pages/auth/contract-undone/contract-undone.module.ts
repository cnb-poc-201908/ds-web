import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractUndoneRoutingModule } from './contract-undone-routing.module';
import { ContractUndoneComponent } from './contract-undone.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';

@NgModule({
  declarations: [ContractUndoneComponent],
  imports: [
    CommonModule,
    ContractUndoneRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class ContractUndoneModule { }
