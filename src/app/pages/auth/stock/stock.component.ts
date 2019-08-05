import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from 'src/app/services/rest.service';

interface Car {
  vin;
  year;
  brand;
  color;
}

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

  cars: Array<object> = [];

  cols: Array<object> = [];

  displayDialog: boolean;
loading: boolean = true;
  car: any = {};

  selectedCar: any;

  newCar: boolean;

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('user')).uId);
    this.getCarList(this.userRole);
    this.cols = [
      { field: 'vin', header: '标识号' },
      { field: 'year', header: '生产日期' },
      { field: 'brand', header: '车系代码' },
      { field: 'color', header: '车型代码' },
      { field: 'color', header: '车型配置代码' },
      { field: 'color', header: '型号' },
      { field: 'color', header: '车身颜色' },
      { field: 'color', header: '装饰' },
      { field: 'color', header: '底盘号' },
      { field: 'color', header: '进度代码' },
      { field: 'color', header: '本店车辆' }
    ];
    this.cars = [
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '222', year: '222', brand: '333', color: '444' },
      { vin: '333', year: '222', brand: '333', color: '444' },
      { vin: '444', year: '222', brand: '333', color: '444' },
      { vin: '555', year: '222', brand: '333', color: '444' },
      { vin: '666', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '222', year: '222', brand: '333', color: '444' },
      { vin: '333', year: '222', brand: '333', color: '444' },
      { vin: '444', year: '222', brand: '333', color: '444' },
      { vin: '555', year: '222', brand: '333', color: '444' },
      { vin: '666', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '222', year: '222', brand: '333', color: '444' },
      { vin: '333', year: '222', brand: '333', color: '444' },
      { vin: '444', year: '222', brand: '333', color: '444' },
      { vin: '555', year: '222', brand: '333', color: '444' },
      { vin: '666', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '222', year: '222', brand: '333', color: '444' },
      { vin: '333', year: '222', brand: '333', color: '444' },
      { vin: '444', year: '222', brand: '333', color: '444' },
      { vin: '555', year: '222', brand: '333', color: '444' },
      { vin: '666', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '222', year: '222', brand: '333', color: '444' },
      { vin: '333', year: '222', brand: '333', color: '444' },
      { vin: '444', year: '222', brand: '333', color: '444' },
      { vin: '555', year: '222', brand: '333', color: '444' },
      { vin: '666', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '222', year: '222', brand: '333', color: '444' },
      { vin: '333', year: '222', brand: '333', color: '444' },
      { vin: '444', year: '222', brand: '333', color: '444' },
      { vin: '555', year: '222', brand: '333', color: '444' },
      { vin: '666', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '222', year: '222', brand: '333', color: '444' },
      { vin: '333', year: '222', brand: '333', color: '444' },
      { vin: '444', year: '222', brand: '333', color: '444' },
      { vin: '555', year: '222', brand: '333', color: '444' },
      { vin: '666', year: '222', brand: '333', color: '444' },
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
    this.rest.getCarList(role).subscribe(f => {
      console.log(f);
      this.loading = false;
    });
  }
}
