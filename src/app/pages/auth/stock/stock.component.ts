import { Component, OnInit, Injectable } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Car } from '../../../domain/car';
import { format } from 'date-fns';
import { SCHEDULE_CODE } from '../../../../assets/static-data/static-data';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})

export class StockComponent implements OnInit {

  userRole: Array<string> = [JSON.parse(localStorage.getItem('user')).role, JSON.parse(localStorage.getItem('user')).roleId];

  cars: Car[];

  cols: Array<object> = [];

  rangeDates: Date[];

  searchContent: string = '';

  displayDialog: boolean;

  loading: boolean;

  car: any = {};

  selectedStatus;

  status: Array<object> = SCHEDULE_CODE;

  storageDate: string;
  licensePlate: '';

  constructor(
    private rest: RestService
  ) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('user')).uId);
    this.cols = [
      { field: 'stockId', header: '标识号' },
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
    this.getStockList();
  }

  save() {
    console.log('save', this.car);
    this.rest.editStock(this.car.id, this.storageDate, this.licensePlate).subscribe();
    this.displayDialog = false;

  }
  cancel() {
    console.log('cancel', this.car);
    this.displayDialog = false;
  }

  onDelete(data) {
    console.log('delete', data);
    this.displayDialog = false;
  }

  onEdit(data) {
    console.log('edit', data);
    if (data.stockId !== this.car.stockId) {
      this.car = data;
      this.storageDate = null;
    }
    this.displayDialog = true;
  }

  getStockList() {
    this.loading = true;
    let startTime = '';
    let endTime = '';
    if (this.rangeDates) {
      startTime = format(this.rangeDates[0], 'YYYY-MM-DD');
      endTime = format(this.rangeDates[1], 'YYYY-MM-DD');
    }
    const [role, roleId] = this.userRole;
    this.rest.getStockList(role, roleId, startTime, endTime, this.searchContent).subscribe(carslist => {
      // if (carslist.message === 'success') {
        carslist.data.forEach(element => {
          SCHEDULE_CODE.forEach(item => {
            if (element.status === item.code){
              element.status = item.text;
            }
          });
        });
        this.cars = carslist.data;
        this.loading = false;
      // }
    });
  }
}
