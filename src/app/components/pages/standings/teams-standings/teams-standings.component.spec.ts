import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsStandingsComponent } from './teams-standings.component';

describe('TeamsStandingsComponent', () => {
  let component: TeamsStandingsComponent;
  let fixture: ComponentFixture<TeamsStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsStandingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
