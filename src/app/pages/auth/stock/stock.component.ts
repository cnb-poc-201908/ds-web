import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})

export class StockComponent implements OnInit {

  constructor() { }

  cars: Array<object> = [];

  cols: Array<object> = [];

  displayDialog: boolean;

  car: any = {};

  selectedCar: any;

  newCar: boolean;

  ngOnInit() {
    // this.http.get('/showcase/resources/data/cars-small.json').subscribe()
    console.log(JSON.parse(localStorage.getItem('user')).uId);
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.cars = [
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' },
      { vin: '111', year: '222', brand: '333', color: '444' }
    ];
  }
  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
  }

  save() {
    const cars = [...this.cars];
    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i !== index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.displayDialog = true;
  }

}
