import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResultsContainerComponent } from './race-results-container.component';

describe('RaceResultsContainerComponent', () => {
  let component: RaceResultsContainerComponent;
  let fixture: ComponentFixture<RaceResultsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceResultsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResultsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
