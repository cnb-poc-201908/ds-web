import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from 'src/app/services/rest.service';

import { Car } from '../../../domain/car';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})

export class StockComponent implements OnInit {

  constructor(
    private rest: RestService
  ) { }

  userRole: string = JSON.parse(localStorage.getItem('user')).uId;

  cars: Car[];

  cols: Array<object> = [];

  rangeDates: Date[];

  displayDialog: boolean;

  loading: boolean;

  car: any = {};

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('user')).uId);
    this.cols = [
      { field: 'sotckId', header: '标识号' },
      { field: 'productionDate', header: '生产日期' },
      { field: 'vehicleSeriesCode', header: '车系代码' },
      { field: 'vehicleModelCode', header: '车型代码' },
      { field: 'vehicleModelConfig', header: '车型配置代码' },
      { field: 'model', header: '型号' },
      { field: 'color', header: '车身颜色' },
      { field: 'decoration', header: '装饰' },
      { field: 'vehicleChassisNumber', header: '底盘号' },
      { field: 'status', header: '进度代码' },
      { field: 'color', header: '本店车辆' }
    ];
  }

  save() {
    console.log('save', this.car);
    this.displayDialog = false;
  }

  onDelete(data) {
    console.log('delete', data);
    this.displayDialog = false;
  }

  onEdit(data) {
    console.log('edit', data);
    this.car = data;
    this.displayDialog = true;
  }

  getCarList(role) {
    this.loading = true;
    const [startTime, endTime] = this.rangeDates;
    console.log(this.rangeDates);
    this.rest.getCarList(role, startTime, endTime).subscribe(carslist => {
      console.log(carslist.data);
      this.cars = carslist.data;
      this.loading = false;
    });
  }
}
