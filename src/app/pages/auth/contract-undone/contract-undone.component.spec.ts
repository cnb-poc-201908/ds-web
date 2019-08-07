import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractUndoneComponent } from './contract-undone.component';

describe('ContractUndoneComponent', () => {
  let component: ContractUndoneComponent;
  let fixture: ComponentFixture<ContractUndoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractUndoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractUndoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
