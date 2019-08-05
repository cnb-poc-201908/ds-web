import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';
import { DatePipe } from './date.pipe';
import { FirstStrPipe } from './first-str.pipe';

@NgModule({
    declarations: [
        TimePipe,
        DatePipe,
        FirstStrPipe
    ],
    imports: [CommonModule],
    exports: [
        TimePipe,
        DatePipe,
        FirstStrPipe
    ],
    providers: [],
})
export class PipesModule { }
