import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapTelemetryHeaderComponent } from './lap-telemetry-header.component';

describe('LapTelemetryHeaderComponent', () => {
  let component: LapTelemetryHeaderComponent;
  let fixture: ComponentFixture<LapTelemetryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LapTelemetryHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapTelemetryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
