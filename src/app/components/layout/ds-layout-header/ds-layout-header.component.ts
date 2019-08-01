import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ds-layout-header',
  templateUrl: './ds-layout-header.component.html',
  styleUrls: ['./ds-layout-header.component.scss']
})
export class DSLayoutHeaderComponent implements OnInit {
  items: MenuItem[];
  menus = [{
    text: 'Sales',
    key: 1
  }, {
    text: 'After Sales',
    key: 2
  }];
  isActive = 2;

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
      { label: 'Documentation', icon: 'fa fa-fw fa-book' },
      { label: 'Support', icon: 'fa fa-fw fa-support' },
      { label: 'Social', icon: 'fa fa-fw fa-twitter' }
    ];
  }

}
