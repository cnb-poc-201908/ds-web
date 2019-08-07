import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { DSLayoutSidebarComponent } from 'src/app/components/layout/ds-layout-sidebar/ds-layout-sidebar.component';
import { DSLayoutHeaderComponent } from 'src/app/components/layout/ds-layout-header/ds-layout-header.component';
import { PrimengModule } from 'src/app/modules/primeng.modules';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    DSLayoutHeaderComponent,
    DSLayoutSidebarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    PrimengModule,
  ],
})
export class AuthModule { }
