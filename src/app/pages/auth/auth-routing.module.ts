import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { StockGuard } from 'src/app/guard/stock.guard';
import { BoardGuard } from 'src/app/guard/board.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'booking', pathMatch: 'prefix', canActivate: [StockGuard, BoardGuard] },
      { path: 'booking', loadChildren: './home/home.module#HomeModule', canActivate: [StockGuard] },
      { path: 'maintain', loadChildren: './maintain/maintain.module#MaintainModule', canActivate: [BoardGuard] },
      { path: 'stock', loadChildren: './stock/stock.module#StockModule', canActivate: [StockGuard] },
      { path: 'vehicle', loadChildren: './vehicle/vehicle.module#VehicleModule', canActivate: [StockGuard] },
      { path: 'contract-done', loadChildren: './contract-done/contract-done.module#ContractDoneModule', canActivate: [StockGuard] },
      { path: 'contract-undone', loadChildren: './contract-undone/contract-undone.module#ContractUndoneModule', canActivate: [StockGuard] },
      { path: 'invoice', loadChildren: './invoice/invoice.module#InvoiceModule', canActivate: [StockGuard] },
      { path: 'board-progress', loadChildren: './board-progress/board-progress.module#BoardProgressModule', canActivate: [BoardGuard] },
      { path: 'board-task', loadChildren: './board-task/board-task.module#BoardTaskModule', canActivate: [BoardGuard] },
      { path: 'board-monitor', loadChildren: './board-monitor/board-monitor.module#BoardMonitorModule', canActivate: [BoardGuard] },
      { path: 'contract-create', loadChildren: './contract-create/contract-create.module#ContractCreateModule', canActivate: [StockGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
