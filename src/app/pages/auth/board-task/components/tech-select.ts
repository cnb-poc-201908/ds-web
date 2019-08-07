import { Component, OnInit } from '@angular/core';
// import {Car} from '../../components/domain/car';
// import {CarService} from '../../service/carservice';
import {DynamicDialogRef} from 'primeng/api';
// import {DynamicDialogConfig} from 'primeng/api';

@Component({
    templateUrl: 'tech-select.html',
    styleUrls: ['tech-select.scss'],
})

// tslint:disable-next-line:component-class-suffix
export class TechSelect implements OnInit {

    constructor(
        public ref: DynamicDialogRef
    ) { }
    ngOnInit() {
        // this.carService.getCarsSmall(id).then(cars => this.cars = cars);
    }

    close() {
        this.ref.close('car');
    }
}
