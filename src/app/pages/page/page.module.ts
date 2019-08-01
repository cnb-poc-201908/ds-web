
// project-list.module.ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
// import {RoutingModule} from './project-list.routers';
// import {ProjectListComponent} from './project-list/project-list.component';
// import {ProjectListHeaderComponent} from './project-list-header/project-list-header.component';
// import { ProjectListBodyComponent } from './project-list-body/project-list-body.component';
// import {PluginDownloadComponent} from '../project-common/plugin-download/plugin-download.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,       // 使用ngModel
    ReactiveFormsModule, // 使用formGroup
    RouterModule, // 缺少则无法使用routerLink标签
    // RoutingModule
  ],
  providers: [],
  declarations: [
    HomeComponent
  ]
})
export class ProjectListModule {}
