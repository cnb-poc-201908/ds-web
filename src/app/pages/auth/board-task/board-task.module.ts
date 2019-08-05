import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardTaskRoutingModule } from './board-task-routing.module';
import { BoardTaskComponent } from './board-task.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';


@NgModule({
  declarations: [BoardTaskComponent],
  imports: [
    CommonModule,
    BoardTaskRoutingModule,
    FormsModule,
    PrimengModule,
  ]
})
export class BoardTaskModule { }
