import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardTaskRoutingModule } from './board-task-routing.module';
import { BoardTaskComponent } from './board-task.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng.modules';
import { TechSelect } from './components/tech-select';

// import { DialogSelectTech } from './carsListDemo';


@NgModule({
  declarations: [
    BoardTaskComponent,
    TechSelect,
  ],
  imports: [
    CommonModule,
    BoardTaskRoutingModule,
    FormsModule,
    PrimengModule,
  ],
  entryComponents: [
    TechSelect,
  ]
})
export class BoardTaskModule { }
