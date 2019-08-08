import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-board-monitor',
  templateUrl: './board-monitor.component.html',
  styleUrls: ['./board-monitor.component.scss']
})
export class BoardMonitorComponent implements OnInit {

  STATUS_OBJ = ['CREATED', 'WORKSTARTED', 'VHC', 'CHECKOUT'];

  stationObj = {};
  employeeGlist = [];
  stationlist = [];

  constructor(
    private rest: RestService,
  ) { }

  ngOnInit() {
    // this.getEmployeeGlist();
    this.getStationlist();
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
}
