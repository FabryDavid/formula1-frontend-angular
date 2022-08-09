import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LapTelemetryChartItemComponent} from './lap-telemetry-chart-item.component';

describe('LapTelemetryChartItemComponent', () => {
  let component: LapTelemetryChartItemComponent;
  let fixture: ComponentFixture<LapTelemetryChartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LapTelemetryChartItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapTelemetryChartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
