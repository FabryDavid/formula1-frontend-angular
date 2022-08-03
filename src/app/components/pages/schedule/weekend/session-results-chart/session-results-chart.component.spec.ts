import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionResultsChartComponent } from './session-results-chart.component';

describe('SessionResultsChartComponent', () => {
  let component: SessionResultsChartComponent;
  let fixture: ComponentFixture<SessionResultsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionResultsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionResultsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
