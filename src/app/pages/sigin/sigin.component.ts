// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sigin',
//   templateUrl: './sigin.component.html',
//   styleUrls: ['./sigin.component.scss']
// })
// export class SiginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export class User {

  public uId: string;
  public upwd: string;
  public role: string;
  public roleId: string;
}

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent implements OnInit {

  user: User;

  constructor(
    public router: Router,
    private messageService: MessageService
  ) {

    this.user = { upwd: '', uId: '', role: '', roleId: '' };
  }

  ngOnInit() { }

  login() {
    switch (this.user.uId) {
      case '002':
        this.user.role = 'dealerIds';
        this.user.roleId = 'DL-10006661';
        break;
      case '003':
        this.user.role = 'groupIds';
        this.user.roleId = 'GP-10001';
        break;

      case '004':
        this.user.role = 'regionIds';
        this.user.roleId = 'RG-10001';
        break;

      default:
        break;
    }
    if (this.user.uId === '001' && this.user.upwd === '111') {
      console.log('login success');
      this.router.navigateByUrl('/board-progress');
    } else if ((this.user.uId === '002' || this.user.uId === '003' || this.user.uId === '004') && this.user.upwd === '111') {
      console.log('login success');
      this.router.navigateByUrl('/stock');
    } else {
      console.log('login failure');
      this.showError();
    }
    const userStr: string = JSON.stringify(this.user);
    localStorage.setItem('user', userStr);
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: '登录失败', detail: '用户名密码不正确' });
  }

}
