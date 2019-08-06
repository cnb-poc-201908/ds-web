import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class InvoiceModule { }
