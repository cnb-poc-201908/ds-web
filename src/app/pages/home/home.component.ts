import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { EChartOption } from 'echarts';

import { Subject } from 'rxjs';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  chartOptions: EChartOption = {
    title: {
      text: '我的车间',
    },
    legend: {
      orient: 'horizontal',
      x: 'center',
      data: ['已分配', '剩余', '未分配', '过去剩余'],
      bottom: 0
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
      name: '库存情况',
      type: 'pie',
      radius: '50%',
      center: ['50%', '50%'],
      clockwise: false,
      data: [{
        value: 45,
        name: '已分配'
      }, {
        value: 25,
        name: '剩余'
      }, {
        value: 15,
        name: '未分配'
      }, {
        value: 8,
        name: '过去剩余'
      }],
      label: {
        normal: {
          textStyle: {
            color: '#999',
            fontSize: 14,
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 4,
          borderColor: '#ffffff',
        },
        emphasis: {
          borderWidth: 0,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }],
    color: [
      '#00acee',
      '#52cdd5',
      '#79d9f1',
      '#a7e7ff',
      '#c8efff'
    ],
    backgroundColor: '#fff'
  };

  constructor(
    private router: Router,
  ) { }

  activeDayIsOpen: boolean = true;
display: boolean = false;
modalData: object = {};
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  actions: CalendarEventAction[] = [
    {
      label: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: 'delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [
    {
      start: new Date('2019-08-01T09:00:00'),
      end: addHours(new Date('2019-08-01T09:00:00'), 2),
      title: '事件 one',
      color: colors.yellow,
      // actions: this.actions
    },
    {
      start: new Date('2019-08-01T10:45:00'),
      end: addHours(new Date('2019-08-01T10:45:00'), 2),
      title: '事件 two',
      color: colors.blue,
      // actions: this.actions,
      // resizable: {
      //   beforeStart: true,
      //   afterEnd: true
      // },
      // draggable: true
    },
    {
      start: new Date('2019-08-01T10:45:00'),
      end: addHours(new Date('2019-08-01T10:45:00'), 2),
      title: '事件 three',
      color: colors.red
    }
  ];

  ngOnInit() {
  }

  goToDetail() {
    console.log();
    this.router.navigate(['/product/', '1111']);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(event);
    this.display = true;
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
