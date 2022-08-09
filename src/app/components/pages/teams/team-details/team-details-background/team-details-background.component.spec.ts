import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamDetailsBackgroundComponent} from './team-details-background.component';

describe('TeamDetailsBackgroundComponent', () => {
  let component: TeamDetailsBackgroundComponent;
  let fixture: ComponentFixture<TeamDetailsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamDetailsBackgroundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
