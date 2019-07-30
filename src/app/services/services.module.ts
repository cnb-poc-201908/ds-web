import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from './rest.service';
import { CommonService } from './common.service';
import { InterceptorService } from './InterceptorService';
import { TimeconvertService } from './timeconvert.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [
    RestService,
    CommonService,
    InterceptorService,
    TimeconvertService
  ],
})
export class ServicesModule { }
