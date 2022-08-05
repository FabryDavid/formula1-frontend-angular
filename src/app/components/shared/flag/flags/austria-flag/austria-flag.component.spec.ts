import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustriaFlagComponent } from './austria-flag.component';

describe('AustriaFlagComponent', () => {
  let component: AustriaFlagComponent;
  let fixture: ComponentFixture<AustriaFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AustriaFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AustriaFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
