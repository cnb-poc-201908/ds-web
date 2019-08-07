import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { RestService } from 'src/app/services/rest.service';

import { Car } from '../../../domain/car';
import { format } from 'date-fns';
import { SelectItem } from 'primeng/api';
import * as _ from 'lodash';

@Component({
  selector: 'app-contract-undone',
  templateUrl: './contract-undone.component.html',
  styleUrls: ['./contract-undone.component.scss']
})
export class ContractUndoneComponent implements OnInit {

  constructor(
    private rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  userRole: Array<string> = [JSON.parse(localStorage.getItem('user')).role, JSON.parse(localStorage.getItem('user')).roleId];

  stockStatus: SelectItem[];

  cars: Car[];
  dataSource: Car[];
  loading: boolean;
  totalCost: string = '';
  cols: Array<object> = [];

  car: any = {};

  ngOnInit() {
    this.stockStatus = [
      { label: '库存时间', value: 'all' },
      { label: '0-60天', value: 'red' },
      { label: '60天-120天', value: 'yellow' },
      { label: '120天以上', value: 'green' }
    ];
    this.cols = [
      { field: 'stockStatus', header: '库龄状态' },
      { field: 'sotckId', header: '标识号' },
      { field: 'productionDate', header: '生产日期' },
      { field: 'vehicleSeriesCode', header: '车系代码' },
      { field: 'vehicleModelCode', header: '车型代码' },
      { field: 'vehicleModelConfig', header: '车型配置代码' },
      { field: 'licensePlate', header: '车牌号' },
      { field: 'model', header: '型号' },
      // { field: 'model', header: '生产订单号' },
      { field: 'color', header: '车身颜色' },
      { field: 'decoration', header: '装饰' },
      { field: 'vehicleChassisNumber', header: '底盘号' },
      // { field: 'status', header: '进度代码' },
      { field: 'storageDate', header: '到库日期/预计到库日期' },
      { field: 'stockCost', header: '价格' },
      // { field: 'color', header: '报零售状态' },
    ];
    this.getCarList();
  }

  switchStockStatus(age) {

    switch (true) {
      case age >= 0 && age < 60:
        return 'red';
        break;
      case age >= 60 && age < 120:
        return 'yellow';
        break;
      case age >= 120:
        return 'green';
        break;
      default:
        break;
    }
  }
  getCarList() {
    this.loading = true;
    const [role, roleId] = this.userRole;
    this.rest.getCarList(role, roleId).subscribe(carslist => {
      this.dataSource = carslist.data;
      this.dataSource.forEach(element => {
        element.stockStatus = this.switchStockStatus(element.stockAge);
      });
      this.cars = this.dataSource;
      this.totalCostSum(this.cars);
      this.loading = false;
    });
  }
  totalCostSum(car) {
    this.totalCost = _.sum(_.map(car, 'stockCost'));
  }
  onFilter(event) {
    if (event.value === 'all') {
      this.cars = this.dataSource;
    } else {
      this.cars = _.filter(this.dataSource, o => {
        return o.stockStatus === event.value;
      });
    }
    this.totalCostSum(this.cars);
    console.log(this.totalCost);
  }

  onCreate(data) {
    console.log('chuangjianhetong');
    this.router.navigate(['/sales/contract-create']);
  }

}
