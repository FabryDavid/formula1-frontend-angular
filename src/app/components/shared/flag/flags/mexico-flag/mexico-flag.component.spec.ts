import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicoFlagComponent } from './mexico-flag.component';

describe('MexicoFlagComponent', () => {
  let component: MexicoFlagComponent;
  let fixture: ComponentFixture<MexicoFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MexicoFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MexicoFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
