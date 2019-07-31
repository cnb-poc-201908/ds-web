import { Injectable, Inject } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
// import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
// import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  filterOpt = {
    date: '',
    pos: '',
    type: ''
  };

  constructor(
    private rest: RestService) {
  }

  Img2Base64(files): any {
    let base64File;
    // const file = this.uploader.queue[0];
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      // base64File = (e.target as any).result;
      base64File = reader.result;
      // console.log('base64Image');
      // console.log(this.base64File);
      // console.log(_file.some);
      // file.some['base64'] = this.base64File;
      // console.log(_file.some);
      // this.selectDone.emit(file.some);
      console.log(base64File);
      return base64File;
    };
  }

  // confirm(contentOrConfig: any, title?: string): Observable<any> {
  //   // 设置dialog的属性，宽度，高度，内容等。
  //   let config = new MatDialogConfig();
  //   config = {
  //     width: '320px',
  //     height: '200px'
  //   };
  //   if (contentOrConfig instanceof Object) {
  //     config.data = contentOrConfig;
  //   } else if ((typeof contentOrConfig) === 'string') {
  //     config.data = {
  //       content: contentOrConfig,
  //       title: title
  //     }
  //   }
  //   return this._confirmDialog.open(ConfirmComponent, config).afterClosed();
  // }

  openSpinner() {
    // console.log('openSpinner');
    const loadingContainer: HTMLElement = document.getElementsByClassName('loading').item(0) as HTMLElement;
    loadingContainer.style.display = 'flex';
  }

  hideSpinner() {
    // console.log('hideSpinner');
    const loadingContainer: HTMLElement = document.getElementsByClassName('loading').item(0) as HTMLElement;
    loadingContainer.style.display = 'none';
  }

}
