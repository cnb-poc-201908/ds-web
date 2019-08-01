import { RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { HomeComponent } from '../home/home.component';
import { MaintainComponent } from '../maintain/maintain.component';
import { SiginComponent } from '../sigin/sigin.component';

export const pageRoutes = [
  {
    path: '',
    component: PageComponent,
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: '../dashboard/dashboard.module#DashboardModule'
      // },
      // {
      //   path: 'visualization',
      //   loadChildren: '../visualization/visualization.module#VisualizationModule'
      // }
      // {
      //   path: 'page', component: PageComponent, children: [

      //   ]
      // },
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      // {
      //   path: 'home', loadChildren: '../../app.module#'
      // },
      {
        path: 'maintain', component: MaintainComponent
      }
    ]
  }
  // { path: 'chat', component: ChatComponent, outlet: "aux" },// 辅助路由
  // { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  // { path: 'login', component: SiginComponent },               // 如果路径中为login,则跳到LoginComponent组件中
  // {
  //   path: 'product/:id', component: ProductComponent, children: [
  //     { path: '', component: ProductDescComponent },
  //     { path: 'seller/:id', component: SellerInfoComponent }
  //   ], canActivate: [LoginGuard]
  // }
];
