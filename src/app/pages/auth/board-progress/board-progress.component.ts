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

  STATUS_OBJ = ['CREATED', 'CHECKEDIN', 'WORKSTARTED', 'WORKCOMPLETED', 'CHECKEDOUT', 'CLOSED'];

  waitingMaintainList = [];
  maintenanceList = [];
  AdditionalMaintenanceList = [];
  washAreaList = [];
  deliveryAreaList = [];
  stayAreaList = [];

  progressAllObj = {
    waitingMaintainList: [],
    maintenanceList: [],
    AdditionalMaintenanceList: [],
    washAreaList: [],
    deliveryAreaList: [],
    stayAreaList: [],
    CREATED: [],
    CHECKEDIN: [],
    WORKSTARTED: [],
    WORKCOMPLETED: [],
    CHECKEDOUT: [],
    CLOSED: [],
  };

  totalLazyCarsLength: number;
  timeout: any;
  inputStr: string;

  constructor(
    private rest: RestService,
  ) { }

  ngOnInit() {
    this.getProgressAll();
    // this.totalLazyCarsLength = this.progressAllObj.waitingMaintainList.length;
  }

  getProgressAll() {
    this.rest.getBoardProgressList().subscribe(res => {
      if (res.code === 200) {
        this.STATUS_OBJ.forEach(element => {
          this.progressAllObj[element] = [];
        });
        this.getSortList(res.data);
      }
    });
  }

  loadCarsLazy(event: LazyLoadEvent, type) {
    this.totalLazyCarsLength = this.progressAllObj[type].length;
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

  getSortList(list) {
    for (let i = 0; i <= list.length - 1; i++) {
      for (let j = 0; j <= this.STATUS_OBJ.length - 1; j++) {
        if (list[i].status === this.STATUS_OBJ[j]) {
          this.progressAllObj[this.STATUS_OBJ[j]].push(list[i]);
          break;
        }
      }
    }
  }

  getRepairOrderId(val) {
    let arr = [];
    if (val) {
      arr = val.split('-');
    }
    return arr[2] || '-';
  }

  search() {
    if (this.inputStr === '') {
      this.getProgressAll();
    } else {
      this.rest.searchCar(this.inputStr).subscribe(res => {
        if (res.code === 200) {
          this.STATUS_OBJ.forEach(element => {
            this.progressAllObj[element] = [];
          });
          this.getSortList(res.data);
        }
      });
    }
  }

}
