import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardMonitorComponent } from './board-monitor.component';


const routes: Routes = [
  {
    path: '',
    component: BoardMonitorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardMonitorRoutingModule { }
