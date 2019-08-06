import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';

import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';

import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { CalendarModule } from 'primeng/calendar';

import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports: [
    ButtonModule,
    ProgressSpinnerModule,
    SplitButtonModule,
    TabMenuModule,
    PanelMenuModule,
    InputTextModule,
    ToastModule,
    VirtualScrollerModule,
    DialogModule,
    CardModule,
    MenuModule,
    CalendarModule,
    TableModule,
    MenubarModule
  ]
})
export class PrimengModule { }
