import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/api';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Subject } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';

@Component({
    templateUrl: 'tech-select.html',
    styleUrls: ['tech-select.scss'],
})

export class TechSelect implements OnInit {

    dataList : any[] = [];
    stations : any[];
    teams : any[];

    viewDate: Date = new Date();
    events: Array<CalendarEvent<{ id: number }>>;
    refresh: Subject<any> = new Subject();

    defaultSelectedTeam : any;
    defaultStations : any[] = [];
    availableStations : any[] = [];

    currentEvent : CalendarEvent[] = [];

    constructor(
        public ref: DynamicDialogRef,
        private rest: RestService,
    ) { }
    ngOnInit() {
      this.rest.getStationList().subscribe(res1=>{
        if (res1.code === 200) {
          this.stations = res1.items;
          this.rest.getEmployeeGlist().subscribe(res2=>{
            this.teams = res2.employGroupData;

            this.teams.forEach(item=>{

              this.defaultStations = this.stations.filter(st=>{
                return item.groupid === st.techid;
              });

              this.dataList.push({
                name : item.groupname ? item.groupname : item.Desc,
                skill : item.skills == "A" ? "机修" : "钣喷",
                dailyTotalHours : item.current_day_hours,
                monthlyTotalHours : item.current_month_hours,
                dailyHotJobs : item.current_day_big_task,
                monthlyHotJobs : item.current_month_big_task,
                effective : item.effort,
                used_time : item.used_time,
                default_stations :this.defaultStations,
                selected : false,
              });
            })

            this.dataList[0].selected = true;
            this.defaultSelectedTeam = this.dataList[0];

            this.drawEvent();
            this.drawStations();

          })
        }
      });

    }


    getTodayTime(dateStr){
      const time = dateStr.split(":")
      let mydate = new Date();
      mydate.setHours(time[0]);
      mydate.setMinutes(time[1]);
      return mydate;
    }

    eventTimesChanged({
      event,
      newStart,
      newEnd
    }: CalendarEventTimesChangedEvent) {
      event.start = newStart;
      event.end = newEnd;
      this.refresh.next();
    }

    close() {
        this.ref.close('car');
    }

    drawEvent() {
      this.currentEvent = [];
      this.defaultSelectedTeam.used_time.forEach(item=>{
        this.currentEvent.push({
          title : '已预订',
          color: {primary: '#e3bc08', secondary: '#FDF1BA'},
          start: this.getTodayTime(item.startTime),
          end : this.getTodayTime(item.endTime),
          meta: {}
        })
      })

      this.currentEvent.push({
        title : '当前派工',
        color: {primary: '#1e90ff', secondary: '#D1E8FF'},
        start: this.getTodayTime("8:00"),
        end : this.getTodayTime("8:15"),
        meta: {},
        draggable : true,
      });

      this.refresh.next();
    }

    drawStations() {
      this.defaultStations = this.defaultSelectedTeam.default_stations;
      let availables = this.stations.filter(item=>{
        return item.status === 'Y';
      });
      let temp = [...this.defaultStations, ...availables];
      if (temp && temp.length > 0) {
        temp.forEach(item=>{
          item.selected = false;
        });
        for (let i = 0; i < temp.length; i ++) {
          if(temp[i].status == 'Y') {
            temp[i].selected = true;
            break;
          }
        }
        let set = new Set(temp);
        this.availableStations = Array.from(set);
      }

      console.log(this.availableStations);
    }


    selectTeam(item) {
      this.dataList.forEach(res=>{
        res.selected = false;
      });
      item.selected = true;
      this.defaultSelectedTeam = item;
      this.drawEvent();
      this.drawStations();
    }
}
