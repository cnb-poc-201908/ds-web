import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractUndoneComponent } from './contract-undone.component';

const routes: Routes = [
  {
    path: '',
    component: ContractUndoneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractUndoneRoutingModule { }
