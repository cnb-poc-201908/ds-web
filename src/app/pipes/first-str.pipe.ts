import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstStr'
})
export class FirstStrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    } else {
      const tmp = value.slice(0, 1);
      return tmp;
    }

  }

}
