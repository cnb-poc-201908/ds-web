import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-board-progress',
  templateUrl: './board-progress.component.html',
  styleUrls: ['./board-progress.component.scss']
})
export class BoardProgressComponent implements OnInit {

  carList = [
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
  waitingMaintainList = [];
  maintenanceList = [];
  AdditionalMaintenanceList = [];
  washAreaList = [];
  deliveryAreaList = [];
  stayAreaList = [];

  progressAllObj = {
    waitingMaintainList: this.carList,
    maintenanceList: [],
    AdditionalMaintenanceList: [],
    washAreaList: [],
    deliveryAreaList: [],
    stayAreaList: [],
  };

  totalLazyCarsLength: number;
  timeout: any;

  constructor(
    private rest: RestService,
  ) { }

  ngOnInit() {
    // this.getProgressAll();
    this.totalLazyCarsLength = this.progressAllObj.waitingMaintainList.length;
  }

  getProgressAll() {
    this.rest.getBoardProgressList().subscribe(res => {
      if (res.status !== 0) {
        this.progressAllObj = res;
      }
    });
  }

  loadCarsLazy(event: LazyLoadEvent, type) {
    this.totalLazyCarsLength = this.progressAllObj[type].length;
    // console.log(event, this.progressAllObj[type], this[type], type, this.totalLazyCarsLength);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this[type] = [];
      if (this.progressAllObj[type]) {
        this[type] = this.progressAllObj[type].slice(event.first, (event.first + event.rows));
      }
    }, 1000);
  }

}
