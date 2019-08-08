import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/api';

@Component({
    templateUrl: 'tech-select.html',
    styleUrls: ['tech-select.scss'],
})

export class TechSelect implements OnInit {

    dataList : any[];

    defaultSelectedTeam : any;
    defaultSelectedSchedule : any;
    defaultSelectedStation : any;

    constructor(
        public ref: DynamicDialogRef
    ) { }
    ngOnInit() {
      this.dataList = [
        {
          name : "技师组1",
          skill : "钣金",
          default_stations : ["S1", "S2"],
          dailyTotalHours : 7,
          monthlyTotalHours : 120,
          dailyHotJobs : 2,
          monthlyHotJobs : 5,
          effective : 80,
          used_time : [
            {startTime: "8:30", endTime: "9:30"},
            {startTime: "10:00", endTime: "10:30"},
            {startTime: "10:30", endTime: "11:00"},
          ],
          stations : [
            {station_No : 'S1', isused : true},
            {station_No : 'S2', isused : false},
            {station_No : 'S3', isused : true},
            {station_No : 'S4', isused : true},
            {station_No : 'S5', isused : true},
            {station_No : 'S6', isused : false},
          ]
        },
        {
          name : "技师组2",
          skill : "钣金",
          default_stations : ["S3", "S4"],
          dailyTotalHours : 1,
          monthlyTotalHours : 160,
          dailyHotJobs : 6,
          monthlyHotJobs : 10,
          effective : 78,
          used_time : [
            {startTime: "9:00", endTime: "9:30"},
            {startTime: "10:00", endTime: "10:30"},
          ],
          stations : [
            {station_No : 'S1', isused : true},
            {station_No : 'S2', isused : true},
            {station_No : 'S3', isused : true},
            {station_No : 'S4', isused : true},
            {station_No : 'S5', isused : false},
            {station_No : 'S6', isused : false},
          ]
        },
        {
          name : "技师组3",
          skill : "钣金",
          default_stations : ["S5", "S6"],
          dailyTotalHours : 3,
          monthlyTotalHours : 100,
          dailyHotJobs : 8,
          monthlyHotJobs : 13,
          effective : 85,
          used_time : [
            {startTime: "9:30", endTime: "11:30"},
          ],
          stations : [
            {station_No : 'S1', isused : false},
            {station_No : 'S2', isused : false},
            {station_No : 'S3', isused : true},
            {station_No : 'S4', isused : true},
            {station_No : 'S5', isused : false},
            {station_No : 'S6', isused : false},
          ]
        }
      ]

      this.defaultSelectedTeam = this.dataList[0];


    }

    close() {
        this.ref.close('car');
    }
}
