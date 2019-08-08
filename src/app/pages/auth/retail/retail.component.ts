import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { RestService } from 'src/app/services/rest.service';

import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.scss']
})
export class RetailComponent implements OnInit {

  constructor(
    private rest: RestService
  ) { }

  dataSource: Array<object> = [];
  loading: boolean;
  displayDialog: boolean;
  cols: Array<object> = [];
  apply: object = {};
  car: any = {};

  dealType: SelectItem[];
  sa: SelectItem[];

  ngOnInit() {
    this.dealType = [
      { label: '空', value: null },
      { label: '正常零售', value: '01' },
      { label: '试驾车', value: ' 02' },
      { label: '大客户销售', value: '03' },
      { label: '政府采购', value: '04' },
      { label: '大使馆采购', value: ' 06' }
    ];
    this.sa = [
      { label: '空', value: null },
      { label: 'Service Manager', value: 'WS01T801' },
      { label: 'Manager Assistant', value: 'WS02T801' },
      { label: 'Workshop Manager', value: 'WS03T801' },
      { label: 'Warranty', value: 'WS04T801' },
      { label: 'Workshop Suervisor', value: ' WS05T801' }
    ];
    this.cols = [
      { field: 'contractId', header: '合同号' },
      { field: 'clientId', header: '客户号' },
      { field: 'name', header: '姓名' },
      { field: 'comment', header: '车辆说明' },
      { field: 'vehicleChassisNumber', header: '底盘号' },
      { field: 'status', header: '状态' },
      { field: 'isNewEnergy', header: '新能源' },
    ];
    this.dataSource = [
      {
        contractId: 'CT20190804334112', clientId: 'CID023933',
        name: '方弘文', comment: '318i',
        vehicleChassisNumber: 'BAOTOUYEDEBAO0011', status: 'Z: 已交车', isNewEnergy: true
      },
      {
        contractId: 'CT20190808004311', clientId: 'CID011277',
        name: '邓荣轩', comment: '318i',
        vehicleChassisNumber: 'BAOTOUYEDEBAO0010', status: 'Z: 已交车', isNewEnergy: true
      },
      {
        contractId: 'CT20190808005748', clientId: 'CID011814',
        name: '袁煜祺', comment: '318i',
        vehicleChassisNumber: 'BAOTOUYEDEBAO0026', status: 'C:系统已取消', isNewEnergy: false
      },
      {
        contractId: 'CT20190808007185', clientId: 'CID012351',
        name: '陶晓啸', comment: '325i Option A',
        vehicleChassisNumber: 'WBADANICA00000001', status: 'Z: 已交车', isNewEnergy: true
      },
      {
        contractId: 'CT20190808008622', clientId: 'CID012888',
        name: '江驰', comment: '318i',
        vehicleChassisNumber: 'TIANJINBXH2015000', status: 'I: 开系统发票', isNewEnergy: false
      },
      {
        contractId: 'CT20190808010059', clientId: 'CID013425',
        name: '夏聪健', comment: '318i',
        vehicleChassisNumber: 'ZHONGSHENGBAOHUIL', status: 'I: 开系统发票', isNewEnergy: true
      },
      {
        contractId: 'CT20190808011496', clientId: 'CID013962',
        name: '曹致远', comment: '318i',
        vehicleChassisNumber: 'ZHONGSHENGBAOHUIG', status: 'Z: 已交车', isNewEnergy: true
      },
      {
        contractId: 'CT20190808012933', clientId: 'CID014499',
        name: '薛浩轩', comment: '318i',
        vehicleChassisNumber: 'BEIJINGCAIWU00011', status: 'I: 开系统发票', isNewEnergy: false
      },
      {
        contractId: 'CT20190808014370', clientId: 'CID015036',
        name: '张伟泽', comment: '318i',
        vehicleChassisNumber: 'BEIJINGCAIWU00003', status: 'I: 开系统发票', isNewEnergy: true
      },
    ];
  }

  onApply(data) {
    console.log(data);
    this.apply = {
      contractId: data.contractId,
      name: data.name,
      vehicleChassisNumber: data.vehicleChassisNumber,
    };
    this.displayDialog = true;
  }

  cancel() {
    this.displayDialog = false;
  }
}
