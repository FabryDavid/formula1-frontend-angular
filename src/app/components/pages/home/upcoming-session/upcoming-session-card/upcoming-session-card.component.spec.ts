import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSessionCardComponent } from './upcoming-session-card.component';

describe('UpcomingSessionCardComponent', () => {
  let component: UpcomingSessionCardComponent;
  let fixture: ComponentFixture<UpcomingSessionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingSessionCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSessionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
