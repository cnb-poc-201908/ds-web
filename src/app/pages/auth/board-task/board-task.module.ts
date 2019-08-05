import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardTaskRoutingModule } from './board-task-routing.module';
import { BoardTaskComponent } from './board-task.component';


@NgModule({
  declarations: [BoardTaskComponent],
  imports: [
    CommonModule,
    BoardTaskRoutingModule
  ]
})
export class BoardTaskModule { }
