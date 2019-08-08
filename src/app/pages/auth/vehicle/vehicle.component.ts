import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { RestService } from 'src/app/services/rest.service';

import { Car } from '../../../domain/car';
import { format } from 'date-fns';
import { SelectItem } from 'primeng/api';
import * as _ from 'lodash';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  constructor(
    private rest: RestService
  ) { }

  userRole: Array<string> = [JSON.parse(localStorage.getItem('user')).role, JSON.parse(localStorage.getItem('user')).roleId];
  stockStatus: SelectItem[];

  cars: Car[];
  dataSource: Car[];
  loading: boolean;
  totalDeposit: string = '';
  totalAdditionalCost: string = '';
  cols: Array<object> = [];

  car: any = {};

  ngOnInit() {
    this.stockStatus = [
      { label: '库龄/天', value: 'all' },
      { label: '0-30天', value: 'white' },
      { label: '30天-60天', value: 'green' },
      { label: '60天-120天', value: 'yellow' },
      { label: '120天以上', value: 'red' }
    ];
    this.cols = [
      { field: 'stockStatus', header: '库龄状态' },
      { field: 'sotckId', header: '标识号' },
      { field: 'stockAge', header: '库龄/天' },
      { field: 'productionDate', header: '生产日期' },
      { field: 'vehicleSeriesCode', header: '车系代码' },
      { field: 'vehicleModelCode', header: '车型代码' },
      { field: 'vehicleModelConfig', header: '配置代码' },
      // { field: 'licensePlate', header: '车牌号' },
      // { field: 'model', header: '型号' },
      // { field: 'model', header: '生产订单号' },
      { field: 'color', header: '车身颜色' },
      { field: 'decoration', header: '装饰' },
      { field: 'vehicleChassisNumber', header: '底盘号' },
      // { field: 'status', header: '进度代码' },
      { field: 'storageDate', header: '到库日期' },
      { field: 'cost', header: '价格' },
      { field: 'deposit', header: '订金' },
      { field: 'contractDate', header: '签约日期' },
      { field: 'contractAmount', header: '签约金额' },
      { field: 'additionalCost', header: '新增成本' },
      { field: 'comment', header: '备注' },
      // { field: 'color', header: '报零售状态' },
      // 追加“订金”“签约日期”，“签约金额”“新增成本”“备注”字段，删除“型号”“车牌号”字段。
    ];
    this.getCarList();
  }

  switchStockStatus(age) {

    switch (true) {
      case age >= 0 && age < 30:
        return 'white';
        break;
      case age >= 30 && age < 60:
        return 'green';
        break;
      case age >= 60 && age < 120:
        return 'yellow';
        break;
      case age >= 120:
        return 'red';
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
      this.totalDeposit = this.totalCostSum(this.cars, 'deposit');
      this.totalAdditionalCost = this.totalCostSum(this.cars, 'additionalCost');
      this.loading = false;
    });
  }
  totalCostSum(arr, item) {
    return _.sum(_.map(arr, item));
  }
  onFilter(event) {
    if (event.value === 'all') {
      this.cars = this.dataSource;
    } else {
      this.cars = _.filter(this.dataSource, o => {
        return o.stockStatus === event.value;
      });
    }
    this.totalDeposit = this.totalCostSum(this.cars, 'deposit');
    this.totalAdditionalCost = this.totalCostSum(this.cars, 'additionalCost');
  }
}
