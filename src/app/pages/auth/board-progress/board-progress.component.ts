import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-board-progress',
  templateUrl: './board-progress.component.html',
  styleUrls: ['./board-progress.component.scss']
})
export class BoardProgressComponent implements OnInit {

  lazyCars = [];
  totalLazyCarsLength: number;
  timeout: any;

  waitingMaintainList = [
    {
      vin: '辽BD1L23',
      brand: '10001',
      color: '王斯伟',
      year: '201907/31 12:45'
    },
    {
      vin: '辽BD1L23',
      brand: '10001',
      color: '王斯伟',
      year: '201907/31 12:45'
    },
    {
      vin: '辽BD1L23',
      brand: '10001',
      color: '王斯伟',
      year: '201907/31 12:45'
    },
    {
      vin: '辽BD1L23',
      brand: '10001',
      color: '王斯伟',
      year: '201907/31 12:45'
    },
    {
      vin: '辽BD1L23',
      brand: '10001',
      color: '王斯伟',
      year: '201907/31 12:45'
    },
    {
      vin: '辽BD1L23',
      brand: '10001',
      color: '王斯伟',
      year: '201907/31 12:45'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.totalLazyCarsLength = this.waitingMaintainList.length;
  }

  loadCarsLazy(event: LazyLoadEvent) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.lazyCars = [];
      if (this.waitingMaintainList) {
        this.lazyCars = this.waitingMaintainList.slice(event.first, (event.first + event.rows));
      }
    }, 1000);
  }

}
