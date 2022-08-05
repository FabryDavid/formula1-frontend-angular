import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaFlagComponent } from './australia-flag.component';

describe('AustraliaFlagComponent', () => {
  let component: AustraliaFlagComponent;
  let fixture: ComponentFixture<AustraliaFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AustraliaFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
