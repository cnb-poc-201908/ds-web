import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/auth/home/home.component';
import { LoginGuard } from './guard/login.guard';
import { SiginComponent } from './pages/sigin/sigin.component';
import { MaintainComponent } from './pages/auth/maintain/maintain.component';
import { Code404Component } from './pages/code404/code404.component';

// const routes: Routes = [
//   // { path: '', redirectTo: 'home', pathMatch: 'full' },
//   // { path: 'chat', component: ChatComponent, outlet: "aux" },// 辅助路由
//   // { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
//   { path: 'page', component: PageComponent },
//   { path: 'login', component: SiginComponent },               // 如果路径中为login,则跳到LoginComponent组件中
//   // {
//   //   path: 'page', component: PageComponent, children: [
//   //     { path: '', component: HomeComponent },
//   //     {
//   //       path: 'home', component: HomeComponent
//   //     },
//   //     {
//   //       path: 'maintain', component: MaintainComponent
//   //     }
//   //   ]
//   // },
//   // {
//   //   path: 'product/:id', component: ProductComponent, children: [
//   //     { path: '', component: ProductDescComponent },
//   //     { path: 'seller/:id', component: SellerInfoComponent }
//   //   ], canActivate: [LoginGuard]
//   // },
//   { path: '**', component: Code404Component }
// ];

const routes: Routes = [
  // { path: '', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule), canActivate: [LoginGuard] },
  { path: '', loadChildren: './pages/auth/auth.module#AuthModule', canActivate: [LoginGuard] },
  // { path: 'auth', loadChildren: './pages/auth/auth.module#AuthModule', canActivate: [LoginGuard] },
  { path: 'sigin', loadChildren: './pages/sigin/sigin.module#SiginModule', },
  // { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'not-found', component: Code404Component },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
