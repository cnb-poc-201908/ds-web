import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(
    private rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  userRole: Array<string> = [JSON.parse(localStorage.getItem('user')).role, JSON.parse(localStorage.getItem('user')).roleId];

  dataSource: Array<object> = [];
  loading: boolean;
  cols: Array<object> = [];

  ngOnInit() {
    this.cols = [
      { field: 'contractId', header: '合同号' },
      { field: 'customerId', header: '客户号' },
      { field: 'customerName', header: '客户姓名' },
      { field: 'orderNumber', header: '订单号' },
      { field: 'orderDate', header: '订单日期' },
      { field: 'invoiceNumber', header: '发票账号' },
      { field: 'invoiceDate', header: '发票日期' },
      { field: 'chassisNumber', header: '车架号' },
      { field: 'salesPersonId', header: '销售员号' },
      { field: 'deliveryDate', header: '预计交付日期' },
      { field: 'invoiceTotal', header: '发票总金额' },
    ];
    this.getContractList();
  }

  getContractList() {
    this.loading = true;
    const [role, roleId] = this.userRole;
    this.rest.getContractList(role, roleId, 'I').subscribe(contractlist => {
      console.log(contractlist.data);
      this.dataSource = contractlist.data;
      this.loading = false;
    });
  }

}
