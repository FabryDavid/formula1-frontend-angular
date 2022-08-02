import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiArabiaFlagComponent } from './saudi-arabia-flag.component';

describe('SaudiArabiaFlagComponent', () => {
  let component: SaudiArabiaFlagComponent;
  let fixture: ComponentFixture<SaudiArabiaFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaudiArabiaFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudiArabiaFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
