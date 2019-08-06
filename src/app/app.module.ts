import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './modules/primeng.modules';
import { ServicesModule } from './services/services.module';
import { Code404Component } from './pages/code404/code404.component';
import { LoginGuard } from './guard/login.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { StockGuard } from './guard/stock.guard';
import { BoardGuard } from './guard/board.guard';

@NgModule({
  declarations: [
    AppComponent,
    Code404Component,
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
  ],
  providers: [LoginGuard, StockGuard, BoardGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
