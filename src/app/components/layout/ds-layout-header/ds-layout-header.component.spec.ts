import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSLayoutHeaderComponent } from './ds-layout-header.component';

describe('DSLayoutHeaderComponent', () => {
  let component: DSLayoutHeaderComponent;
  let fixture: ComponentFixture<DSLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
