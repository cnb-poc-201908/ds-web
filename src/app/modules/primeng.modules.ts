import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';

import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [
    ButtonModule,
    ProgressSpinnerModule,
    SplitButtonModule,
    TabMenuModule,
    PanelMenuModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PrimengModule { }
