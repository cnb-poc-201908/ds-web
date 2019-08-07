import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardMonitorRoutingModule } from './board-monitor-routing.module';
import { BoardMonitorComponent } from './board-monitor.component';


@NgModule({
  declarations: [BoardMonitorComponent],
  imports: [
    CommonModule,
    BoardMonitorRoutingModule
  ]
})
export class BoardMonitorModule { }
