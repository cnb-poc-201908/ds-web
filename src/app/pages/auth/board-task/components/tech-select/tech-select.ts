import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { CalendarView, CalendarEventAction } from 'angular-calendar';
import { addHours } from 'date-fns';
// import {Car} from '../../components/domain/car';
// import {CarService} from '../../service/carservice';
// import {DynamicDialogRef} from 'primeng/api';
// import {DynamicDialogConfig} from 'primeng/api';

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
    templateUrl: './tech-select.html',
    styleUrls: ['./tech-select.scss'],
})

// tslint:disable-next-line:component-class-suffix
export class TechSelect implements OnInit {

    view: CalendarView = CalendarView.Day;

    viewDate: Date = new Date();

    display: boolean = false;
    modalData: {
        action: string;
        event: CalendarEvent;
      };
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
            id: 1,
            start: new Date('2019-08-01T09:00:00'),
            end: addHours(new Date('2019-08-01T09:00:00'), 2),
            title: '马悦女士预约保养',
            color: colors.yellow,
            meta: {
                sales_id: 51,
                sales_name: '王思维',
                customer_name: '马悦女士',
                tel: '138888888',
                license_id: '辽B D1L23',
                baseplate_id: 'LBVAJS938459292',
                model: 'E90LI',
                description: '329I A CHN CKD A',
                mileage: '30000',
                WIP: '20177',
                orderer: '王思维',
                contact_date: '2019/07/31',
                contact_time: '10.08',
                pre_entrance_date: '2019/07/31',
                pre_entrance_time: '10.08',
                entrance_date: '2019/07/31',
                entrance_time: '10.08',
                plan_entrance_date: '2019/07/31',
                mileage_current: '21000',
                source: '客户来电'
            }
        },
        {
            id: 2,
            start: new Date('2019-08-01T10:45:00'),
            end: addHours(new Date('2019-08-01T10:45:00'), 2),
            title: '事件 two',
            color: colors.blue,
        },
        {
            id: 3,
            start: new Date('2019-08-01T10:45:00'),
            end: addHours(new Date('2019-08-01T10:45:00'), 2),
            title: '事件 three',
            color: colors.red
        }
    ];

    constructor() { }
    ngOnInit() {
        // this.carService.getCarsSmall(id).then(cars => this.cars = cars);
    }

    handleEvent(action: string, event: CalendarEvent): void {
        console.log(event);
        if (event.id === 1) {
            this.modalData = { event, action };
            this.display = true;
        }
        // this.modal.open(this.modalContent, { size: 'lg' });
    }
}
