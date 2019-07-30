import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TimeconvertService {

    constructor() { }

    /**
     * GMT -> xxxx-xx-xx xx:xx:xx
     *
     * @param {*} itme
     * @returns
     * @memberof TimeconvertService
     */
    GMTToStr(val: string | number) {
        // console.log(val);
        if (val) {
            // const NowtimeValue = val;
            const time = new Date(val);
            const year: any = time.getFullYear();
            const month: any = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
            const date: any = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
            let hour: any = time.getHours();
            let minute: any = time.getMinutes();
            const second: any = '00';
            hour < 10 ? hour = '0' + hour : hour = hour;
            minute < 10 ? minute = '0' + minute : minute = minute;
            // second < 10 ? second = '0' + second : second = second;
            return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
        } else {
            return;
        }
    }
    /**
     * xxxx-xx-xx xx:xx:xx -> GMT
     *
     * @param {*} time
     * @returns
     * @memberof TimeconvertService
     */
    StrToGMT(time: string | number) {
        const GMT = new Date(time);
        return GMT;
    }
}
