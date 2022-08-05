import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedMapTelemetryComponent } from './speed-map-telemetry.component';

describe('SpeedMapTelemetryComponent', () => {
  let component: SpeedMapTelemetryComponent;
  let fixture: ComponentFixture<SpeedMapTelemetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedMapTelemetryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedMapTelemetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
