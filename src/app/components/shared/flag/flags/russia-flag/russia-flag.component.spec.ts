import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RussiaFlagComponent } from './russia-flag.component';

describe('RussiaFlagComponent', () => {
  let component: RussiaFlagComponent;
  let fixture: ComponentFixture<RussiaFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RussiaFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RussiaFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
