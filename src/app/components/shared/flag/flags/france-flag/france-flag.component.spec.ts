import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FranceFlagComponent} from './france-flag.component';

describe('FranceFlagComponent', () => {
  let component: FranceFlagComponent;
  let fixture: ComponentFixture<FranceFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FranceFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranceFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
