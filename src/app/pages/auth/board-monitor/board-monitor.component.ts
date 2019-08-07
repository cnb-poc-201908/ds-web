import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-board-monitor',
  templateUrl: './board-monitor.component.html',
  styleUrls: ['./board-monitor.component.scss']
})
export class BoardMonitorComponent implements OnInit {

  itemList = [
    {title: '待派工', num: '4'},
    {title: '维修中', num: '4'},
    {title: '增项', num: '4'},
    {title: '待交车', num: '8'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
