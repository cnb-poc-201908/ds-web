import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
// import { Event } from '../domain/event.model';
import { environment } from '../../environments/environment';
import { Stock } from '../domain/stock';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // 具体业务的 url
  // url = 'http://9.119.123.37:8080';
  // url = 'http://9.200.40.146:9001';
  // private url = 'http://localhost:3000/api';

  private url;
  private url1;
  private options = {
    headers: new HttpHeaders()
  };

  constructor(
    private http: HttpClient
  ) {
    if (!environment.production) {
      console.log('dev');
      // this.url = 'http://localhost:3000/api';
      this.url = 'http://bmwpoc.cdkapps.cn:30090';
      this.url1 = 'http://bmwpoc.cdkapps.cn:30091';
    } else {
      console.log('prod');
      this.url = 'http://bmwpoc.cdkapps.cn:30090';
      this.url1 = 'http://bmwpoc.cdkapps.cn:30091';
    }
    this.setToken('token');
  }

  setToken(token) {
    // console.log('init token');

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Authorization', token);
    this.options = {
      headers
    };
  }

  private httpGet(url: string): Observable<any> {
    return this.http.get(url, this.options).pipe(
      map(this.extractDate),
      catchError(this.handleError([]))
    );
  }

  private httpGetExport(url: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get(url, {
      headers,
      reportProgress: true
    }).pipe(
      map(this.extractDate),
      catchError(this.handleError())
    );
  }

  private httpDelete(url: string): Observable<any> {
    return this.http.delete(url, this.options).pipe(
      map(this.extractDate),
      catchError(this.handleError([]))
    );
  }

  private httpPost(url: string, body: object): Observable<any> {
    this.options.headers.append('Content-Type', 'application/json');
    return this.http.post(url, body, this.options).pipe(
      map(this.extractDate),
      catchError(this.handleError([])),
    );
  }

  private httpPut(url: string, body: object): Observable<any> {
    this.options.headers.append('Content-Type', 'application/json');
    return this.http.put(url, body, this.options).pipe(
      map(this.extractDate),
      catchError(this.handleError([])),
    );
  }

  private httpPostForm(url: string, body: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/form-data');
    return this.http.post(url, body, {
      headers,
      reportProgress: true
    }).pipe(
      map(this.extractDate),
      catchError(this.handleError(body))
    );
  }

  private httpPostWithProgress(url: string, body: object): Observable<any> {
    return this.http.post(url, body, this.options).pipe(
      map(this.extractDate),
      catchError(this.handleError([])),
    );
  }

  // 处理接口返回的数据,处理成json格式
  private extractDate(res: Response) {
    return res || {};
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      return of(error as T);
    };
  }

  // 处理请求中的错误，考虑了各种情况的错误处理并在console.log中显示error
  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error || '';
  //     const err = body['error'] || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }

  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

  getEventAll(): Observable<Stock> {
    return this.httpGet(this.url + '/event/all');
  }

  // 库存管理
  getStockList(role, roleId, startDate, endDate, keyword): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const params = `${startDate ? '&startDate=' + startDate : ''}${endDate ? '&endDate=' + endDate : ''}${keyword ? '&keyword=' + keyword : ''}
    `;
    // return this.httpGet(`../../assets/mock.json?${role}=${roleId}${params}`);
    return this.httpGet(this.url + `/stock/stocks?${role}=${roleId}${params}`);
  }
  editStock(id, status, storageDate, licensePlate): Observable<any> {
    const body = {
      id,
      status,
      storageDate,
      licensePlate
    };
    return this.httpPut(this.url + `/stock/stocks/${id}`, body);
  }
  delStock(id): Observable<any> {
    return this.httpDelete(this.url + `/stock/stocks/${id}`);
    // return this.httpDelete(this.url + `/stock/stocks/${id}`);
  }

  // 车辆管理
  getCarList(role, roleId): Observable<any> {
    return this.httpGet(`../../assets/car_mock.json?${role}=${roleId}=`);
    // return this.httpGet(this.url + `/stock/stock-insights?${role}=${roleId}`);
  }

  // 总进度看板
  getBoardProgressList(): Observable<any> {
    return this.httpGet(this.url1 + `/repairOrder/repair-orders`);
  }
}
