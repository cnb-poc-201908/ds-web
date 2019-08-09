import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError, mergeMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonService } from './common.service';
// import { MatSnackBar } from '@angular/material';



@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    private router: Router,
    private common: CommonService,
    // private snackBar: MatSnackBar
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('http start');
    this.common.openSpinner();
    const mergedHeaders = new HttpHeaders({
      // 'Authorization': 'Token',
      // 'Content-Type': 'application/json'
    });

    const req = request.clone({
      headers: mergedHeaders
    }); // 这里可以在请求中加参数

    return next.handle(req).pipe(
      tap(
        event => {
          console.log('http success');
          setTimeout(() => {
            this.common.hideSpinner();
          }, 1000);
        },
        catchError((err: HttpErrorResponse) => this.ErrorHandle(err))
      )
    );
  }

  private ErrorHandle(
    event: HttpResponse<any> | HttpErrorResponse,
  ): Observable<any> {
    // console.log('http end');
    // 业务处理：一些通用操作
    switch (event.status) {
      case 401:
        // console.log('not login');
        this.router.navigate(['/']);
        return of(event);
        break;
      case 500:
        // let snackBarRef = this.snackBar.open('Server Error !', 'OK', {
        //   duration: 3000
        // });
        break;
      default:
    }
    return throwError(event);
  }
}
