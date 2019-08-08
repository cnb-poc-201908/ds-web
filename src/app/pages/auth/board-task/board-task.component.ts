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
  inputStr = '';
  tabFlag = 'CREATED';

  constructor(
    public dialogService: DialogService,
    private rest: RestService,
  ) { }

  tickets: any[];
  dataList: any[];
  dataListObj = {
    CREATED: [],
    INPROGRESS: [],
    CHECKEDOUT: [],
  };

  ngOnInit() {
    this.items = [
      { label: '待派工', icon: 'fa fa-fw fa-bar-chart', target: 'CREATED' },
      // { label: '待维修', icon: 'fa fa-fw fa-calendar' },
      { label: '增项', icon: 'fa fa-fw fa-book', target: 'INPROGRESS' },
      { label: '待交车', icon: 'fa fa-fw fa-book', target: 'CHECKEDOUT' },
    ];

    this.activeIndex = 0;
    this.activeItem = this.items[0];
    this.getData('CREATED');
    // this.getMockData("");

    // this.dispatch({});
  }

  getData(status) {
    // this.rest.getBoardTaskList().subscribe(res=>{
    this.rest.getBoardProgressList().subscribe(res => {
      if (res.code === 200) {
        this.dataListObj.CREATED = [];
        this.dataListObj.INPROGRESS = [];
        this.dataListObj.CHECKEDOUT = [];
        this.getPlanOutDateTime(res.data);
        res.data.forEach(element => {
          if (element.status === 'CREATED') {
            this.dataListObj.CREATED.push(element);
          } else if (element.status === 'INPROGRESS') {
            this.dataListObj.INPROGRESS.push(element);
          } else if (element.status === 'CHECKEDOUT') {
            this.dataListObj.CHECKEDOUT.push(element);
          }
        });
      }
    });
  }

  getMockData(status) {
    this.rest.getBoardTaskList().subscribe(res => {
      if (res.code === 0) {
        if (status && status != "") {
          this.dataList = res.data.filter(item => {
            // this.dataList = res.data.filter(item=>{
            return item.status == status && item.checkInDateTime == null;
          });
        } else {
          this.dataList = res.data;
        }
        // If item has more than 1 job, it means Hot Job
        this.dataList.forEach(item => {
          if (item.jobs && item.jobs.length > 1) {
            item.hot = true;
          } else {
            item.hot = false;
          }
        });

      }
    });
  }

  change(event, index, item) {
    this.activeIndex = index;
    this.activeItem = item;
    this.tabFlag = item.target;
  }

  dispatch(item) {
    const ref = this.dialogService.open(TechSelect, {
      header: '派工',
      width: '95%',
      height: '70%',
      baseZIndex: 10000,
      data: {
        repairOrderId: item.repairOrderId
      }
    });

    ref.onClose.subscribe((res) => {
      if (res === 'submit') {
        this.getData("CREATED");
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

  search(inputStr) {
    if (this.inputStr === '') {
      this.getData('');
      // this.getMockData('');
    } else {
      this.rest.searchCar(this.inputStr).subscribe(res => {
        if (res.code === 200) {
          this.dataListObj.CREATED = [];
          this.dataListObj.INPROGRESS = [];
          this.dataListObj.CHECKEDOUT = [];
          this.getPlanOutDateTime(res.data);
          res.data.forEach(element => {
            if (element.status === 'CREATED') {
              this.dataListObj.CREATED.push(element);
            } else if (element.status === 'INPROGRESS') {
              this.dataListObj.INPROGRESS.push(element);
            } else if (element.status === 'CHECKEDOUT') {
              this.dataListObj.CHECKEDOUT.push(element);
            }
          });
        }
      });
    }
  }

  getPlanOutDateTime(data:any[]) {
    if (data && data.length > 0) {
      data.forEach(item=>{
        let date = new Date();
        let labor = item.amountLabor.split(".")
        let laborHour = 0;
        let laborMins = 0;
        if (labor && labor.length === 1) {
          laborHour = Number(labor[0]);
        } else if (labor && labor.length === 2) {
          laborHour = Number(labor[0]);
          const minStr = labor[1];
          if (minStr === '5') {
            laborMins = 30;
          }
        }
        date.setHours(date.getHours() + laborHour);
        date.setMinutes(date.getMinutes() + laborMins);
        item.planOutDateTime = date.toString();
      })
    }
  }

}
