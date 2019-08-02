import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PrimengModule } from 'src/app/modules/primeng.modules';
import { HomeComponent } from './home.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxEchartsModule } from 'ngx-echarts';
import { MomentModule } from 'ngx-moment';
import '../../../../../node_modules/moment/locale/zh-cn.js';
import { PrimengModule } from 'src/app/modules/primeng.modules';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxEchartsModule,
    MomentModule
  ]
})
export class HomeModule { }
