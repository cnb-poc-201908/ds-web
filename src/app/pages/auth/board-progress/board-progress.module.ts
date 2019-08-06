import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardProgressRoutingModule } from './board-progress-routing.module';
import { BoardProgressComponent } from './board-progress.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';


@NgModule({
  declarations: [BoardProgressComponent],
  imports: [
    CommonModule,
    BoardProgressRoutingModule,
    FormsModule,
    PrimengModule,
  ]
})
export class BoardProgressModule { }
