import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UkFlagComponent} from './uk-flag.component';

describe('UkFlagComponent', () => {
  let component: UkFlagComponent;
  let fixture: ComponentFixture<UkFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UkFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UkFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
