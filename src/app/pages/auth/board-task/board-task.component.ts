import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/api';


@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.scss'],
  providers: [DialogService]
})
export class BoardTaskComponent implements OnInit {

  date: Date;
  items: MenuItem[];
  activeItem: MenuItem;
  activeIndex: number;

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.items = [
      { label: '已到店未进厂', icon: 'fa fa-fw fa-bar-chart' },
      { label: '已在厂维修', icon: 'fa fa-fw fa-calendar' },
      { label: '已出厂结算', icon: 'fa fa-fw fa-book' }
    ];
    this.activeIndex = 0;
    // console.log();

  }

  change(e, i) {
    console.log(e);
    console.log(i);
    this.activeIndex = i;
  }

  show() {
    // const ref = this.dialogService.open(CarsListDemo, {
    //   header: 'Choose a Car',
    //   width: '70%'
    // });
  }

}
