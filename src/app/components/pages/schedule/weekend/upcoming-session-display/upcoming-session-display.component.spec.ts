import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpcomingSessionDisplayComponent} from './upcoming-session-display.component';

describe('UpcomingSessionDisplayComponent', () => {
  let component: UpcomingSessionDisplayComponent;
  let fixture: ComponentFixture<UpcomingSessionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingSessionDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSessionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
