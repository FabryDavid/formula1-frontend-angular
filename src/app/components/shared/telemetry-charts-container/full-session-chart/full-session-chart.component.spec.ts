import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSessionChartComponent } from './full-session-chart.component';

describe('FullSessionChartComponent', () => {
  let component: FullSessionChartComponent;
  let fixture: ComponentFixture<FullSessionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullSessionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSessionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
