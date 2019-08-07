import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailComponent } from './retail.component';

const routes: Routes = [
  {
    path: '',
    component: RetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailRoutingModule { }
