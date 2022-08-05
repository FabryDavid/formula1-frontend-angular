import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearShiftsTelemetryComponent } from './gear-shifts-telemetry.component';

describe('GearShiftsTelemetryComponent', () => {
  let component: GearShiftsTelemetryComponent;
  let fixture: ComponentFixture<GearShiftsTelemetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GearShiftsTelemetryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GearShiftsTelemetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
