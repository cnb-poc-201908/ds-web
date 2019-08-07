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
        vin: 'XLB09930LB1233',
        serial : '辽BCF916',
        totalHours : 9,
        expact : '2019/07/31 12:00',
        submit : '2019/07/31 12:45',
        model : 'BMW0011',
        sa : '王经理',
        remark : '钣金喷漆',
        hot : true,
      },
      {
        vin: 'XLB09930LB1311',
        serial : '辽BCF912',
        totalHours : 3,
        expact : '2019/07/31 12:00',
        submit : '2019/07/31 12:45',
        model : 'BMW0011',
        sa : '王经理',
        remark : '钣金喷漆',
        hot : false,
      },
      {
        vin: 'XLB09930XT9125',
        serial : '辽BCN115',
        totalHours : 13,
        expact : '2019/07/31 12:00',
        submit : '2019/07/31 12:45',
        model : 'BMW0011',
        sa : '王经理',
        remark : '钣金喷漆',
        hot : true,
      },
      {
        vin: 'XLB09938X3125J',
        serial : '辽BC8012',
        totalHours : 15,
        expact : '2019/07/31 12:00',
        submit : '2019/07/31 12:45',
        model : 'BMW0011',
        sa : '王经理',
        remark : '钣金喷漆',
        hot : false,
      },
      {
        vin: 'XBR99930LB1233',
        serial : '辽BCP031',
        totalHours : 19,
        expact : '2019/07/31 12:00',
        submit : '2019/07/31 12:45',
        model : 'BMW0011',
        sa : '王经理',
        remark : '钣金喷漆',
        hot : true,
      },
      {
        vin: 'XUI34430LB1903',
        serial : '辽BCF234',
        totalHours : 4,
        expact : '2019/07/31 12:00',
        submit : '2019/07/31 12:45',
        model : 'BMW0011',
        sa : '王经理',
        remark : '钣金喷漆',
        hot : true,
      },
      {
        vin: 'XLB09930LB1233',
        serial : '辽BC0A12',
        totalHours : 8,
        expact : '2019/07/31 12:00',
        submit : '2019/07/31 12:45',
        model : 'BMW0011',
        sa : '王经理',
        remark : '钣金喷漆',
        hot : true,
      },
      {
        vin: 'XLB09930LB1233',
        serial : '辽BH3934',
        totalHours : 2,
        expact : '2019/07/31 12:00',
        submit : '2019/07/31 12:45',
        model : 'BMW0011',
        sa : '王经理',
        remark : '钣金喷漆',
        hot : true,
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
