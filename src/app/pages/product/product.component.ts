import { Component, OnInit } from '@angular/core';
import {navigation} from './nav';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ls;
  navObj;
  full;

  constructor() { }

  ngOnInit() {
    const srcArray = navigation;
    const distArray = [];
    const privilegeCodeObj = this.ls.getObject('privilegeCode');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < srcArray.length; i++) {
      if (srcArray[i].privilegeCode === 'static') {
        distArray.push(srcArray[i]);
      } else {
        if (privilegeCodeObj[srcArray[i].privilegeCode]) {
          distArray.push(srcArray[i]);
          const srcChildrenArray = srcArray[i].children;
          const distChildrenArray = [];
          // tslint:disable-next-line:prefer-for-of
          for (let j = 0; j < srcChildrenArray.length; j++) {
            if (privilegeCodeObj[srcChildrenArray[j].privilegeCode]) {
              distChildrenArray.push(srcChildrenArray[j]);
              this.full.params[srcChildrenArray[j].moduleName] = srcChildrenArray[j].moduleParams;
            }
          }
          distArray[distArray.length - 1].children = distChildrenArray;
        }
      }
    }
    this.navObj = distArray;
  }
}
