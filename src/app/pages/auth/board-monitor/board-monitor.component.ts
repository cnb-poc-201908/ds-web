import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-board-monitor',
  templateUrl: './board-monitor.component.html',
  styleUrls: ['./board-monitor.component.scss']
})
export class BoardMonitorComponent implements OnInit {

  itemList = [
    {label: '待派工', class: 'green', num: '26', img: '../../../../assets/image/board_monitor/waiting_work.svg'},
    {label: '维修中', class: 'purple', num: '30', img: '../../../../assets/image/board_monitor/maintenance.svg'},
    {label: '增项', class: 'red', num: '30', img: '../../../../assets/image/board_monitor/addition.svg'},
    {label: '待交车', class: 'blue', num: '16', img: '../../../../assets/image/board_monitor/waiting_delivery.svg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
