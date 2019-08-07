import { Component, OnInit, Injectable } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Stock } from '../../../domain/stock';
import { format } from 'date-fns';
import { STOCK_STATUS } from '../../../../assets/static-data/static-data';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})

export class StockComponent implements OnInit {

  userRole: Array<string> = [JSON.parse(localStorage.getItem('user')).role, JSON.parse(localStorage.getItem('user')).roleId];
  userFlag: string = JSON.parse(localStorage.getItem('user')).flag;
  cars: Stock[];

  cols: Array<object> = [];

  rangeDates: Date[];

  searchContent: string = '';

  displayDialog: boolean;

  loading: boolean;

  car: any = {};

  stockStatus = {
    code: '',
    text: ''
  };
  stockId: any = '';

  status: Array<object> = STOCK_STATUS;

  statusList = STOCK_STATUS;

  storageDate: Date;

  licensePlate: string = '';

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
    this.rest.editStock(this.stockId, this.stockStatus.code, format(this.storageDate, 'YYYY-MM-DD'), this.licensePlate).subscribe(
      result => {
        console.log('success');
        this.getStockList();
        this.displayDialog = false;
      }
    );
  }
  cancel() {
    console.log('cancel', this.car);
    this.displayDialog = false;
  }

  onDelete(data) {
    this.rest.delStock(data.stockId).subscribe(result => {
      if (result.message === 'success') {
        alert('库存删除成功！');
        this.getStockList();
      }
    });
  }

  onEdit(data) {
    this.stockId = data.stockId;
    this.storageDate = new Date(data.storageDate);
    this.licensePlate = data.licensePlate;
    const i = this.statusList.find(item => item.text === data.status);
    this.stockStatus = i ? i : this.stockStatus;
    this.displayDialog = true;
  }

  onFile(data) {
    window.open(`url${data.stockId}`, '_blank');
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
      if (carslist.message === 'success') {
        carslist.data.forEach(element => {
          this.statusList.forEach(item => {
            if (element.status === item.code) {
              element.status = item.text;
            }
          });
        });
        this.cars = carslist.data;
        this.loading = false;
      }
    });
  }
}
