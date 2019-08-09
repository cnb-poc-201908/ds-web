import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-monitor',
  templateUrl: './board-monitor.component.html',
  styleUrls: ['./board-monitor.component.scss']
})
export class BoardMonitorComponent implements OnInit {

  STATUS_OBJ = ['CREATED', 'WORKSTARTED', 'INPROGRESS', 'CHECKOUT'];

  stationObj = {};
  employeeGlist = [];
  stationlist = [];
  progressAllObj = {
    CREATED: [],
    WORKSTARTED: [],
    INPROGRESS: [],
    CHECKEDOUT: []
  };

  constructor(
    private router: Router,
    private rest: RestService,
  ) { }

  ngOnInit() {
    this.getProgressAll();
    // this.getEmployeeGlist();
    this.getStationlist();
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

  // 全部技师列表查询
  getEmployeeGlist() {
    this.rest.getEmployeeGlist().subscribe(res => {
      if (res.code === 200) {
        this.employeeGlist = res.employGroupData;
      }
    });
  }

  // 全部工位列表查询
  getStationlist() {
    this.rest.getStationlist().subscribe(res => {
      if (res.code === 200) {
        this.stationlist = res.items;
        // tslint:disable-next-line:no-shadowed-variable
        this.rest.getEmployeeGlist().subscribe(res => {
          if (res.code === 200) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < res.employGroupData.length; i++) {
              this.stationObj[res.employGroupData[i].groupid] = [];
              // tslint:disable-next-line:prefer-for-of
              for (let j = 0; j < this.stationlist.length; j++) {
                // res.employGroupData[j].station = [];
                if (res.employGroupData[i].groupid === this.stationlist[j].techid) {
                  this.stationObj[res.employGroupData[i].groupid].push(this.stationlist[i].stationid);
                }
              }
            }
            this.employeeGlist = res.employGroupData;
          }
        });
      }
    });
  }

  formatSkill(val) {
    if (val === 'A') {
      return '机修';
    } else {
      return '钣喷';
    }
  }

  jumpPage() {
    this.router.navigate([`/board-task`]);
  }
}
