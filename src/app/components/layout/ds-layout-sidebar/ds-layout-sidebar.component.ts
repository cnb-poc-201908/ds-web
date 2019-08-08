import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/pages/sigin/sigin.component';

@Component({
  selector: 'app-ds-layout-sidebar',
  templateUrl: './ds-layout-sidebar.component.html',
  styleUrls: ['./ds-layout-sidebar.component.scss']
})
export class DSLayoutSidebarComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      console.log(data);
    });
    this.route.parent.url.subscribe(url => {
      console.log(url);
    });
    this.initItems();
    // this.items = [
    //   { icon: 'ds icon-booking', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/board-progress'] },
    //   { icon: 'ds icon-maintain', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/board-task'] },
    //   { icon: 'ds icon-summary', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/stock'] }
    // ];
    this.activeItem = this.items[0];
  }

  initItems() {
    const userStr = localStorage.getItem('user');
    // console.log('user', userStr);

    const user: User = JSON.parse(userStr);
    if (user.uId === '001') {
      this.items = [
        { label: '调度管理', icon: 'ds icon-booking', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/board-monitor'] },
        { label: '派工管理', icon: 'ds icon-maintain', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/board-task'] },
      ];
    } else if (user.uId === 'sa') {
      this.items = [
        {  label: '进度看板', icon: 'ds icon-summary', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/sa/board'] },
      ];
    } else {
      this.items = [
        { label: '库存管理', icon: 'ds icon-application', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/sales/stock'] },
        { label: '合同管理', icon: 'ds icon-document', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/sales/contract-undone'] },
        { label: '交车报告', icon: 'ds icon-summary', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/sales/retail'] },
        { label: '报表管理', icon: 'ds icon-report', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/sales/report'] }
      ];
    }
  }

}
