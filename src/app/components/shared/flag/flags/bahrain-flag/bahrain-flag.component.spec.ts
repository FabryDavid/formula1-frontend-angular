import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahrainFlagComponent } from './bahrain-flag.component';

describe('BahrainFlagComponent', () => {
  let component: BahrainFlagComponent;
  let fixture: ComponentFixture<BahrainFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BahrainFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BahrainFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
