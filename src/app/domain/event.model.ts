import {Esessions} from './esessions.model';
export interface Event {
    no?: number;
    endDate?: string | number;
    address: string;
    endtime: string;
    esessions: Esessions[];
    eventdesc: string;
    eventid?: number;
    location: string;
    starttime: string;
    teacher: string;
    title: string;
    trackCnt: number;
    actions?: string;
    status?: string | number;
    img1: string;
    trackJson: string;
    verifyCode?:string;
    docLink?:string;
}

