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

    this.user = { upwd: '', uId: '' };
  }

  ngOnInit() { }

  login() {
    if (this.user.uId === '001' && this.user.upwd === '111') {
      console.log('login success');
      const userStr: string = JSON.stringify(this.user);
      localStorage.setItem('user', userStr);
      this.router.navigateByUrl('/auth');
    } else {
      console.log('login failure');
      this.showError();
    }
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: '登录失败', detail: '用户名密码不正确' });
  }

}
