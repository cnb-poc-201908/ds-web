import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardProgressRoutingModule } from './board-progress-routing.module';
import { BoardProgressComponent } from './board-progress.component';


@NgModule({
  declarations: [BoardProgressComponent],
  imports: [
    CommonModule,
    BoardProgressRoutingModule
  ]
})
export class BoardProgressModule { }
