import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractCreateComponent } from './contract-create.component';


const routes: Routes = [
  {
    path: '',
    component: ContractCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractCreateRoutingModule { }
