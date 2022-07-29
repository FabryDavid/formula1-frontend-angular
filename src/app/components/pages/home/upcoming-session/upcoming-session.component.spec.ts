import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSessionComponent } from './upcoming-session.component';

describe('UpcomingSessionComponent', () => {
  let component: UpcomingSessionComponent;
  let fixture: ComponentFixture<UpcomingSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
