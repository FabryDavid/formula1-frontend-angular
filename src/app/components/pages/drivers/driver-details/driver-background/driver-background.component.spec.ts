import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverBackgroundComponent } from './driver-background.component';

describe('DriverBackgroundComponent', () => {
  let component: DriverBackgroundComponent;
  let fixture: ComponentFixture<DriverBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverBackgroundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
