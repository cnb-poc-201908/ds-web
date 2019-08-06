import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiginRoutingModule } from './sigin-routing.module';
import { SiginComponent } from './sigin.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';
import { LoginGuard } from 'src/app/guard/login.guard';
import { StockGuard } from 'src/app/guard/stock.guard';
import { BoardGuard } from 'src/app/guard/board.guard';


@NgModule({
  declarations: [
    SiginComponent
  ],
  imports: [
    CommonModule,
    SiginRoutingModule,
    FormsModule,
    PrimengModule
  ],
  providers: [LoginGuard, StockGuard, BoardGuard],
})
export class SiginModule { }
