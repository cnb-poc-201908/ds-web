import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractPrintComponent } from './contract-print.component';

const routes: Routes = [
  {
    path: '',
    component: ContractPrintComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractPrintRoutingModule { }
