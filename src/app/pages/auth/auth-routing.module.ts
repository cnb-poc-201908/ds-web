import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { StockGuard } from 'src/app/guard/stock.guard';
import { BoardGuard } from 'src/app/guard/board.guard';
import { SaGuard } from 'src/app/guard/sa.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'booking', pathMatch: 'prefix', canActivate: [StockGuard, BoardGuard] },
      { path: 'booking', loadChildren: './home/home.module#HomeModule', canActivate: [StockGuard] },
      { path: 'maintain', loadChildren: './maintain/maintain.module#MaintainModule', canActivate: [BoardGuard] },
      { path: 'sales/stock', loadChildren: './stock/stock.module#StockModule', canActivate: [StockGuard] },
      { path: 'sales/vehicle', loadChildren: './vehicle/vehicle.module#VehicleModule', canActivate: [StockGuard] },
      { path: 'sales/contract-done', loadChildren: './contract-done/contract-done.module#ContractDoneModule', canActivate: [StockGuard] },
      // tslint:disable-next-line:max-line-length
      { path: 'sales/contract-undone', loadChildren: './contract-undone/contract-undone.module#ContractUndoneModule', canActivate: [StockGuard] },
      { path: 'sales/invoice', loadChildren: './invoice/invoice.module#InvoiceModule', canActivate: [StockGuard] },
      { path: 'board-progress', loadChildren: './board-progress/board-progress.module#BoardProgressModule', canActivate: [BoardGuard] },
      { path: 'board-task', loadChildren: './board-task/board-task.module#BoardTaskModule', canActivate: [BoardGuard] },
      { path: 'board-monitor', loadChildren: './board-monitor/board-monitor.module#BoardMonitorModule', canActivate: [BoardGuard] },
      // tslint:disable-next-line:max-line-length
      { path: 'sales/contract-create', loadChildren: './contract-create/contract-create.module#ContractCreateModule', canActivate: [StockGuard] },
      { path: 'sales/retail', loadChildren: './retail/retail.module#RetailModule', canActivate: [StockGuard] },
      { path: 'sales/report', loadChildren: './report/report.module#ReportModule', canActivate: [StockGuard] },
      // SA
      { path: 'sa/board', loadChildren: './board-progress/board-progress.module#BoardProgressModule', canActivate: [SaGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
