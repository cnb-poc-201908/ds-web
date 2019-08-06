import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Quit' }
        ]
      },
    ];
  }

  sigout() {
    this.router.navigateByUrl('/sigin');
  }

}
