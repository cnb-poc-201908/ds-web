import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

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
    this.items = [
      { icon: 'ds icon-booking', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/board-progress'] },
      { icon: 'ds icon-maintain', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/board-task'] },
      { icon: 'ds icon-summary', routerLinkActiveOptions: { activeItem: true }, routerLink: ['/stock'] }
    ];
    this.activeItem = this.items[0];
  }

}
