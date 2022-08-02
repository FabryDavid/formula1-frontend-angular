import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgiumFlagComponent } from './belgium-flag.component';

describe('BelgiumFlagComponent', () => {
  let component: BelgiumFlagComponent;
  let fixture: ComponentFixture<BelgiumFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelgiumFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelgiumFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
