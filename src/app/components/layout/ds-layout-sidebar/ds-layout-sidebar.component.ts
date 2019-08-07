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
        { icon: 'ds icon-booking', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/board-monitor'] },
        { icon: 'ds icon-maintain', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/board-task'] },
      ];
    } else {
      this.items = [
        { icon: 'ds icon-summary', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/stock'] },
        { icon: 'ds icon-summary', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/contract-done'] }
      ];
    }
  }

}
