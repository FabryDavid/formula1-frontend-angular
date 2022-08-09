import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DriverLapSelectComponent} from './driver-lap-select.component';

describe('DriverLapSelectComponent', () => {
  let component: DriverLapSelectComponent;
  let fixture: ComponentFixture<DriverLapSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverLapSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLapSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
