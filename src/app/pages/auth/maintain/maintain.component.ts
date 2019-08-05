import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit {

  constructor(
    private rest: RestService
  ) { }

  date: Date;
  items: MenuItem[];
  activeItem: MenuItem;

  vehicleActiveFlag = 0;

  ngOnInit() {
    this.items = [
      { label: '已到店未进厂', icon: 'fa fa-fw fa-bar-chart' },
      { label: '已在厂维修', icon: 'fa fa-fw fa-calendar' },
      { label: '已出厂结算', icon: 'fa fa-fw fa-book' }
    ];
    // this.activeItem = this.items[2];
  }

  handleClick(e) {
    console.log(e);

  }
  getEventAll() {
    this.rest.getEventAll().subscribe(f => {
      console.log(f);

    });
  }
}
