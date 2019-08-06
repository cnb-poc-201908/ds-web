import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/api';


@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.scss'],
  providers: [DialogService]
})
export class BoardTaskComponent implements OnInit {

  date: Date;
  items: MenuItem[];
  activeItem: MenuItem;
  activeIndex: number;

  constructor(
    public dialogService: DialogService
  ) { }
  tickets: any[];

  ngOnInit() {
    this.items = [
      { label: '待派工', icon: 'fa fa-fw fa-bar-chart' },
      { label: '待维修', icon: 'fa fa-fw fa-calendar' },
      { label: '维修中', icon: 'fa fa-fw fa-book' },
      { label: '增项', icon: 'fa fa-fw fa-book' },
    ];

    this.tickets = [
      {
        ticket : 'B20190806001',
        vin: 'XLB09930LB1233',
        serial : '辽BCF915'
      },
      {
        ticket : 'B20190806001',
        vin: 'XLB09930LB1233',
        serial : '辽BCF915'
      },
      {
        ticket : 'B20190806001',
        vin: 'XLB09930LB1233',
        serial : '辽BCF915'
      },
      {
        ticket : 'B20190806001',
        vin: 'XLB09930LB1233',
        serial : '辽BCF915'
      },
      {
        ticket : 'B20190806001',
        vin: 'XLB09930LB1233',
        serial : '辽BCF915'
      },
      {
        ticket : 'B20190806001',
        vin: 'XLB09930LB1233',
        serial : '辽BCF915'
      },
      {
        ticket : 'B20190806001',
        vin: 'XLB09930LB1233',
        serial : '辽BCF915'
      },
      {
        ticket : 'B20190806001',
        vin: 'XLB09930LB1233',
        serial : '辽BCF915'
      },
    ];

    this.activeIndex = 0;
    this.activeItem = this.items[0];
  }

  change(event, index, item) {
    this.activeIndex = index;
    this.activeItem = item;
  }

}
