import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';



@NgModule({
  exports: [
    ButtonModule,
    ProgressSpinnerModule,
    SplitButtonModule
  ]
})
export class PrimengModule { }
