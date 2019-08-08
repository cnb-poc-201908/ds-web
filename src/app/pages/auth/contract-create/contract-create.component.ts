import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {
  text = '';
  status = [
    { code: '1', text: '111' },
    { code: '1', text: '111' },
    { code: '1', text: '111' },
  ];
  stockStatus = {};
  planDate: Date;
  contractDate: Date;
  sBoss = '';
  sManager = '';
  sConsult = '';
  deckExpandFlag = false;
  deck1 = {};
  deck1input = '';
  deck2 = {};
  deck2input = '';
  deck3 = {};
  deck3input = '';
  deck4 = {};
  deck4input = '';
  deck5 = {};
  deck5input = '';
  deck6 = {};
  deck6input = '';
  colorExpandFlag = false;
  delete3 = true;
  delete2 = true;
  delete1 = true;
  color1 = {};
  color1Input = '';
  color2 = {};
  color2Input = '';
  dealer1 = {};
  dealer1input = '';
  dealer2 = {};
  dealer2input = '';
  dealer3 = {};
  dealer3input = '';
  dealer4 = {};
  dealer4input = '';
  dealer5 = {};
  dealer5input = '';
  dealer6 = {};
  dealer6input = '';
  delete5 = true;
  delete6 = true;
  delete7 = true;
  delete8 = true;
  delete9 = true;
  delete10 = true;
  dealerExpandFlag = false;
  firm1 = {};
  firm1input = '';
  firm2 = {};
  firm2input = '';
  firm3 = {};
  firm3input = '';
  firm4 = {};
  firm4input = '';
  firm5 = {};
  firm5input = '';
  firm6 = {};
  firm6input = '';
  firmExpandFlag = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  deckExpand() {
    this.deckExpandFlag = true;
  }
  colorExpand() {
    this.colorExpandFlag = true;
  }

  dealerExpand() {
    this.dealerExpandFlag = true;
  }
  firmExpand() {
    this.firmExpandFlag = true;
  }

  clean(i) {
    switch (i) {
      case 1:
        this.deck1 = {};
        this.deck1input = '';
        break;
      case 2:
        this.deck2 = {};
        this.deck2input = '';
        break;
      case 3:
        this.deck3 = {};
        this.deck3input = '';
        break;
      case 4:
        this.color1 = {};
        this.color1Input = '';
        break;
      case 5:
        this.dealer1 = {};
        this.dealer1input = '';
        break;
      case 6:
        this.dealer2 = {};
        this.dealer2input = '';
        break;
      case 7:
        this.dealer3 = {};
        this.dealer3input = '';
        break;
      case 8:
        this.firm1 = {};
        this.firm1input = '';
        break;
      case 9:
        this.firm2 = {};
        this.firm2input = '';
        break;
      case 10:
        this.firm3 = {};
        this.firm3input = '';
        break;
    }
  }
  delete(i) {
    switch (i) {
      case 1:
        this.delete1 = false;
        break;
      case 2:
        this.delete2 = false;
        break;
      case 3:
        this.delete3 = false;
        break;
      case 4:
        this.colorExpandFlag = false;
        break;
      case 5:
        this.delete5 = false;
        break;
      case 6:
        this.delete6 = false;
        break;
      case 7:
        this.delete7 = false;
        break;
      case 8:
        this.delete8 = false;
        break;
      case 9:
        this.delete9 = false;
        break;
      case 10:
        this.delete10 = false;
        break;
    }
  }
  goback() {
    this.router.navigate(['/sales/contract-undone']);
  }

}
