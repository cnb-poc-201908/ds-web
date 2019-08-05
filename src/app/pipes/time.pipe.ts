import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time'
})
export class TimePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        console.log(value);
        console.log(args);
        switch (args) {
            case 'full':
                if (value) {
                    // console.log(value);

                    const NowtimeValue = value;
                    const time = new Date(NowtimeValue * 1);
                    const year: any = time.getFullYear();
                    const month: any = time.getMonth() + 1;
                    const date: any = time.getDate();
                    const hour: any = time.getHours();
                    const minute: any = time.getMinutes();
                    const second: any = time.getSeconds();
                    // console.log(year);
                    // console.log(month);
                    // console.log(date);

                    let nowH: any = parseInt(String(NowtimeValue / 3600), 0);
                    let nowM: any = parseInt(String(NowtimeValue % 3600 / 60), 0);
                    let nowS: any = parseInt(String(NowtimeValue % 60), 0);
                    nowH < 10 ? nowH = '0' + nowH : nowH = nowH;
                    nowM < 10 ? nowM = '0' + nowM : nowM = nowM;
                    nowS < 10 ? nowS = '0' + nowS : nowS = nowS;
                    // return nowH + ':' + nowM + ':' + nowS;

                    return `${year}-${month}-${date}  ${hour}:${minute}:${second}`;
                }
                break;
            case 'xxxx-xx-xx':
                if (value) {
                    const NowtimeValue = value;
                    const time = new Date(NowtimeValue * 1);
                    const year: any = time.getFullYear();
                    const month: any = time.getMonth() + 1;
                    const date: any = time.getDate();
                    return `${year}-${month}-${date}`;
                }
                break;
        }

    }
}
