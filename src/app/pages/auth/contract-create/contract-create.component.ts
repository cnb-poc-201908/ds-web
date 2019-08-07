import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {
  text = '';
  status = [
    {code: '1', text: '111'},
    {code: '1', text: '111'},
    {code: '1', text: '111'},
  ];
  stockStatus = {};
  planDate: Date;
  contractDate:Date;
  sBoss = '';
  sManager = '';
  sConsult = '';

  constructor() { }

  ngOnInit() {
  }

}
