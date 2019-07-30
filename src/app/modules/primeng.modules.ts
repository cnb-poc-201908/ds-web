import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';

import {TabMenuModule} from 'primeng/tabmenu';
import {PanelMenuModule} from 'primeng/panelmenu';

@NgModule({
  exports: [
    ButtonModule,
    ProgressSpinnerModule,
    SplitButtonModule,
    TabMenuModule,
    PanelMenuModule
  ]
})
export class PrimengModule { }
