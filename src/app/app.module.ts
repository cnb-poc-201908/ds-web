import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './modules/primeng.modules';
import { ServicesModule } from './services/services.module';
import { HomeComponent } from './pages/home/home.component';
import { Code404Component } from './pages/code404/code404.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDescComponent } from './pages/product-desc/product-desc.component';
import { SellerInfoComponent } from './pages/seller-info/seller-info.component';
import { LoginGuard } from './guard/login.guard';
import { SiginComponent } from './pages/sigin/sigin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DSLayoutHeaderComponent } from './components/layout/ds-layout-header/ds-layout-header.component';
import { DSLayoutSidebarComponent } from './components/layout/ds-layout-sidebar/ds-layout-sidebar.component';
import { PageComponent } from './pages/page.component';
import { MessageService } from 'primeng/api';
import { MaintainComponent } from './pages/maintain/maintain.component';
import { NgxEchartsModule } from 'ngx-echarts';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MomentModule } from 'ngx-moment';

import '../../node_modules/moment/locale/zh-cn.js';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    Code404Component,
    ProductComponent,
    ProductDescComponent,
    SellerInfoComponent,
    // SiginComponent,
    // DSLayoutHeaderComponent,
    // DSLayoutSidebarComponent,
    PageComponent,
    MaintainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    ServicesModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxEchartsModule,
    MomentModule
  ],
  providers: [LoginGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
