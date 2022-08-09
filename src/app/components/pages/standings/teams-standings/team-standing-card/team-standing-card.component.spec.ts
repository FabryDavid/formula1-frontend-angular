import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamStandingCardComponent} from './team-standing-card.component';

describe('TeamStandingCardComponent', () => {
  let component: TeamStandingCardComponent;
  let fixture: ComponentFixture<TeamStandingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamStandingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStandingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
