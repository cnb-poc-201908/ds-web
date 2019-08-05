import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardTaskComponent } from './board-task.component';


const routes: Routes = [
  {
    path: '',
    component: BoardTaskComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardTaskRoutingModule { }
