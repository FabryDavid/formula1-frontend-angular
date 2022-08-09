import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedAndGearshiftMapComponent } from './speed-and-gearshift-map.component';

describe('SpeedAndGearshiftMapComponent', () => {
  let component: SpeedAndGearshiftMapComponent;
  let fixture: ComponentFixture<SpeedAndGearshiftMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeedAndGearshiftMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedAndGearshiftMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
