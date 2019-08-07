import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMonitorComponent } from './board-monitor.component';

describe('BoardMonitorComponent', () => {
  let component: BoardMonitorComponent;
  let fixture: ComponentFixture<BoardMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
