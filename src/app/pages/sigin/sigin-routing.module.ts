import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiginComponent } from './sigin.component';


const routes: Routes = [
  {
    path: '',
    component: SiginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiginRoutingModule { }
