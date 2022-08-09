import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpainFlagComponent} from './spain-flag.component';

describe('SpainFlagComponent', () => {
  let component: SpainFlagComponent;
  let fixture: ComponentFixture<SpainFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpainFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpainFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
