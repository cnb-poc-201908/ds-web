import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractDoneComponent } from './contract-done.component';


const routes: Routes = [
  {
    path: '',
    component: ContractDoneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractDoneRoutingModule { }
