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

export class User {

  public uId: string;
  public userName: string;
  public upwd: string;
}

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

  user: User;

  constructor(public router: Router) {

    this.user = { userName: '', upwd: '', uId: '' };
  }

  ngOnInit() { }

  login() {

    console.log('login()---------------');

    alert(this.user.uId);
    const userStr: string = JSON.stringify(this.user);
    sessionStorage.setItem('user', userStr);
    this.router.navigateByUrl('/home');
  }
}
