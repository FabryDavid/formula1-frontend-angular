import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaeFlagComponent } from './uae-flag.component';

describe('UaeFlagComponent', () => {
  let component: UaeFlagComponent;
  let fixture: ComponentFixture<UaeFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaeFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UaeFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
