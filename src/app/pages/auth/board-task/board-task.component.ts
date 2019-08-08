import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/api';
import { TechSelect } from './components/tech-select/tech-select';
import { RestService } from 'src/app/services/rest.service';

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
  displaySendMessage: boolean = false;
  displayTaskDetail: boolean = false;
  displayDispatch: boolean = false;

  constructor(
    public dialogService: DialogService,
    private rest: RestService,
  ) { }

  tickets: any[];
  dataList : any[];

  ngOnInit() {
    this.items = [
      { label: '待派工', icon: 'fa fa-fw fa-bar-chart' },
      // { label: '待维修', icon: 'fa fa-fw fa-calendar' },
      { label: '增项', icon: 'fa fa-fw fa-book' },
      { label: '待交车', icon: 'fa fa-fw fa-book' },
    ];

    this.activeIndex = 0;
    this.activeItem = this.items[0];
    this.getData("");

    // this.dispatch({});
  }

  getData(status) {
    // this.rest.getBoardTaskList().subscribe(res=>{
    this.rest.getBoardProgressList().subscribe(res=>{
      if (res.code === 0) {
        if (status && status != "") {
          this.dataList = res.data.items.filter(item=>{
            // this.dataList = res.data.filter(item=>{
              return item.status == status && item.checkInDateTime == null;
            });
        } else {
          this.dataList = res.data.items;
        }



        // If item has more than 1 job, it means Hot Job
        this.dataList.forEach(item=>{
          if (item.jobs && item.jobs.length > 0) {
            item.hot = true;
          } else {
            item.hot = false;
          }
        });

        console.log(this.dataList);
      }
    });
  }

  change(event, index, item) {
    this.activeIndex = index;
    this.activeItem = item;
  }

  dispatch(item) {
    const ref = this.dialogService.open(TechSelect, {
      header: '派工',
      width: '95%',
      height: '70%',
      baseZIndex: 10000
    });

    ref.onClose.subscribe((car) => {
      if (car) {
          console.log(car);
      }
  });

  }

  showSendMsg(event) {
    this.displaySendMessage = true;
    event.stopPropagation();
  }

  showDetail(event) {
    this.displayTaskDetail = true;
    event.stopPropagation();
  }

  sendMessage() {
    this.displaySendMessage = false;
  }

  closeDetail() {
    this.displayTaskDetail = false;
  }

}
