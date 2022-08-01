import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryPanelComponent } from './telemetry-panel.component';

describe('TelemetryPanelComponent', () => {
  let component: TelemetryPanelComponent;
  let fixture: ComponentFixture<TelemetryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelemetryPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemetryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
