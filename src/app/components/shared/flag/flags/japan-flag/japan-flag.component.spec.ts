import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanFlagComponent } from './japan-flag.component';

describe('JapanFlagComponent', () => {
  let component: JapanFlagComponent;
  let fixture: ComponentFixture<JapanFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JapanFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JapanFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
