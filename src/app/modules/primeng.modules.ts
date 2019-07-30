import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';


@NgModule({
  exports: [
    ButtonModule,
    SplitButtonModule
  ]
})
export class PrimengModule { }
