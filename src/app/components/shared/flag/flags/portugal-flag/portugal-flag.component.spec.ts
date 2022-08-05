import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortugalFlagComponent } from './portugal-flag.component';

describe('PortugalFlagComponent', () => {
  let component: PortugalFlagComponent;
  let fixture: ComponentFixture<PortugalFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortugalFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortugalFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
