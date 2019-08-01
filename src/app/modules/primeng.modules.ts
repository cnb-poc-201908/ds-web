import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';

import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';

import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
<<<<<<< HEAD
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import {CardModule} from 'primeng/card';
=======
import { CardModule } from 'primeng/card';
>>>>>>> 99d6fe4255a99faa98c7a33667c9ddefbaa6f54d

import { DialogModule } from 'primeng/dialog';

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
    CardModule
  ]
})
export class PrimengModule { }
