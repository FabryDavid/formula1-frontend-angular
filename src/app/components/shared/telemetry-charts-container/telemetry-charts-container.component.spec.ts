import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryChartsContainerComponent } from './telemetry-charts-container.component';

describe('TelemetryChartsContainerComponent', () => {
  let component: TelemetryChartsContainerComponent;
  let fixture: ComponentFixture<TelemetryChartsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelemetryChartsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemetryChartsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
