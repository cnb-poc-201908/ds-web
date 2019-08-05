import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'booking', pathMatch: 'prefix' },
      { path: 'booking', loadChildren: './home/home.module#HomeModule', },
      { path: 'maintain', loadChildren: './maintain/maintain.module#MaintainModule', },
      { path: 'stock', loadChildren: './stock/stock.module#StockModule', },
      { path: 'board-progress', loadChildren: './board-progress/board-progress.module#BoardProgressModule', },
      { path: 'board-task', loadChildren: './board-task/board-task.module#BoardTaskModule', }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
