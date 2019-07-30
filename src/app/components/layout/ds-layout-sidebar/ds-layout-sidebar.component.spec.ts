import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSLayoutSidebarComponent } from './ds-layout-sidebar.component';

describe('DSLayoutSidebarComponent', () => {
  let component: DSLayoutSidebarComponent;
  let fixture: ComponentFixture<DSLayoutSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSLayoutSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSLayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
