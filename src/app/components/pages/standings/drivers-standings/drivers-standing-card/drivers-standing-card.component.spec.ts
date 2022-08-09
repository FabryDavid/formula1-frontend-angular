import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DriversStandingCardComponent} from './drivers-standing-card.component';

describe('DriversStandingCardComponent', () => {
  let component: DriversStandingCardComponent;
  let fixture: ComponentFixture<DriversStandingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversStandingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversStandingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
