import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { DSLayoutSidebarComponent } from 'src/app/components/layout/ds-layout-sidebar/ds-layout-sidebar.component';
import { DSLayoutHeaderComponent } from 'src/app/components/layout/ds-layout-header/ds-layout-header.component';


@NgModule({
  declarations: [
    AuthComponent,
    DSLayoutHeaderComponent,
    DSLayoutSidebarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
