import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginGuard } from './guard/login.guard';
import { SellerInfoComponent } from './pages/seller-info/seller-info.component';
import { ProductDescComponent } from './pages/product-desc/product-desc.component';
import { ProductComponent } from './pages/product/product.component';
import { SiginComponent } from './pages/sigin/sigin.component';
import { PageComponent } from './pages/page.component';
import { MaintainComponent } from './pages/maintain/maintain.component';
import { Code404Component } from './pages/code404/code404.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'chat', component: ChatComponent, outlet: "aux" },// 辅助路由
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: SiginComponent },               // 如果路径中为login,则跳到LoginComponent组件中
  {
    path: 'page', component: PageComponent, children: [
      { path: '', component: HomeComponent },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'maintain', component: MaintainComponent
      }
    ]
  },
  {
    path: 'product/:id', component: ProductComponent, children: [
      { path: '', component: ProductDescComponent },
      { path: 'seller/:id', component: SellerInfoComponent }
    ], canActivate: [LoginGuard]
  },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
