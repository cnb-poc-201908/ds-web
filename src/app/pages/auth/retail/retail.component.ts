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
        contractId: '1693', clientId: '10174',
        name: '王怀东', comment: '318i',
        vehicleChassisNumber: 'BAOTOUYEDEBAO0011', status: 'C:系统已取消', isNewEnergy: true
      },
      {
        contractId: '1692', clientId: '10225',
        name: '杨宁', comment: '318i',
        vehicleChassisNumber: 'BAOTOUYEDEBAO0010', status: 'C:系统已取消', isNewEnergy: true
      },
      {
        contractId: '1707', clientId: '10240',
        name: '马俊', comment: '318i',
        vehicleChassisNumber: 'BAOTOUYEDEBAO0026', status: 'C:系统已取消', isNewEnergy: false
      },
      {
        contractId: '1672', clientId: '9091',
        name: '杨颖', comment: '325i Option A',
        vehicleChassisNumber: 'WBADANICA00000001', status: 'Z: 已交车', isNewEnergy: true
      },
      {
        contractId: '1639', clientId: '9485',
        name: '李四', comment: '318i',
        vehicleChassisNumber: 'TIANJINBXH2015000', status: 'I: 开系统发票', isNewEnergy: false
      },
      {
        contractId: '1612', clientId: '9947',
        name: '玉皇大帝', comment: '318i',
        vehicleChassisNumber: 'ZHONGSHENGBAOHUIL', status: 'I: 开系统发票', isNewEnergy: true
      },
      {
        contractId: '1610', clientId: '9915',
        name: '周程', comment: '318i',
        vehicleChassisNumber: 'ZHONGSHENGBAOHUIG', status: 'Z: 已交车', isNewEnergy: true
      },
      {
        contractId: '1590', clientId: '8976',
        name: '赵四', comment: '318i',
        vehicleChassisNumber: 'BEIJINGCAIWU00011', status: 'I: 开系统发票', isNewEnergy: false
      },
      {
        contractId: '1585', clientId: '3652',
        name: '刘能', comment: '318i',
        vehicleChassisNumber: 'BEIJINGCAIWU00003', status: 'I: 开系统发票', isNewEnergy: true
      },
      {
        contractId: '1580', clientId: '9678',
        name: '刘小香', comment: '325i Option A',
        vehicleChassisNumber: 'QDWANBAOHANG00060', status: 'Z: 已交车', isNewEnergy: true
      },
      {
        contractId: '1550', clientId: '7460',
        name: '赵四', comment: '318i',
        vehicleChassisNumber: 'QINGDAO1CAIWU0004', status: 'I: 开系统发票', isNewEnergy: true
      },
      {
        contractId: '1548', clientId: '686',
        name: '王大拿', comment: '318i',
        vehicleChassisNumber: 'QINGDAO1CAIWU0002', status: 'I: 开系统发票', isNewEnergy: true
      },
      {
        contractId: '1545', clientId: '2716',
        name: '张鲁', comment: '325i Option A',
        vehicleChassisNumber: 'QDWANBAOHANG00014', status: 'Z: 已交车', isNewEnergy: true
      },
      {
        contractId: '1544', clientId: '9466',
        name: '杜恒宇', comment: '325i Option A',
        vehicleChassisNumber: 'QDWANBAOHANG00018', status: 'I: 开系统发票', isNewEnergy: true
      },
      {
        contractId: '1536', clientId: '9267',
        name: '何腾', comment: '325i Option A',
        vehicleChassisNumber: 'QDWANBAOHANG00005', status: 'C:系统已取消', isNewEnergy: true
      },
      {
        contractId: '1499', clientId: '752',
        name: '周润发', comment: '318i',
        vehicleChassisNumber: 'LANGFANGCAIWU0007', status: 'I: 开系统发票', isNewEnergy: true
      },
      {
        contractId: '1497', clientId: '1050',
        name: '刘德华', comment: '318i',
        vehicleChassisNumber: 'LANGFANGCAIWU0001', status: 'I: 开系统发票', isNewEnergy: true
      },
      {
        contractId: '1494', clientId: '9071',
        name: '王语嫣', comment: '318i',
        vehicleChassisNumber: 'BEIJINGYAZHIJIE01', status: 'I: 开系统发票', isNewEnergy: true
      },
      {
        contractId: '1486', clientId: '9062',
        name: '章鱼', comment: 'X1 sDrive18i Lifestyle Package',
        vehicleChassisNumber: 'LBVUG7103EME37927', status: 'C:系统已取消', isNewEnergy: true
      },
      {
        contractId: '1472', clientId: '8957',
        name: '陈三', comment: 'X1 sDrive18i Lifestyle Package',
        vehicleChassisNumber: 'LBVUG7103EME37924', status: 'C:系统已取消', isNewEnergy: true
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
