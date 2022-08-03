import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideTabsComponent } from './left-side-tabs.component';

describe('LeftSideTabsComponent', () => {
  let component: LeftSideTabsComponent;
  let fixture: ComponentFixture<LeftSideTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
