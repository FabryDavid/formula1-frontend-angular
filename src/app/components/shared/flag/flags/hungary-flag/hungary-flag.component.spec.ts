import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HungaryFlagComponent} from './hungary-flag.component';

describe('HungaryFlagComponent', () => {
  let component: HungaryFlagComponent;
  let fixture: ComponentFixture<HungaryFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HungaryFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HungaryFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
