import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {User} from '../../app/pages/sigin/sigin.component';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(public  router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
        // const loggedIn: boolean = Math.random() < 0.5;

        // console.log(loggedIn);

        // if (!loggedIn) {
        //     console.log('用户未登录');
        // }
        // return loggedIn;


        const userStr = sessionStorage.getItem('user');
        const user: User = JSON.parse(userStr);
        if (user && user.userName) {
            alert(user.userName);
            console.log('路由守卫验证通过!');
            alert('路由守卫验证通过!');
            return true;
        } else {
            console.log('路由守卫验证失败!');
            alert('路由守卫验证失败!');
            this.router.navigateByUrl('/login');
            return false;
        }

    }
}
