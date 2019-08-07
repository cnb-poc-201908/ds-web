import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardMonitorRoutingModule } from './board-monitor-routing.module';
import { BoardMonitorComponent } from './board-monitor.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';


@NgModule({
  declarations: [BoardMonitorComponent],
  imports: [
    CommonModule,
    BoardMonitorRoutingModule,
    FormsModule,
    PrimengModule,
  ]
})
export class BoardMonitorModule { }
