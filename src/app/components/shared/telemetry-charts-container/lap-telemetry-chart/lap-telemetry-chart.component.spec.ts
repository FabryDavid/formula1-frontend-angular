import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LapTelemetryChartComponent} from './lap-telemetry-chart.component';

describe('LapTelemetryChartComponent', () => {
  let component: LapTelemetryChartComponent;
  let fixture: ComponentFixture<LapTelemetryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LapTelemetryChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapTelemetryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
