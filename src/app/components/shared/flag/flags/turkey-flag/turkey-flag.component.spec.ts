import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyFlagComponent } from './turkey-flag.component';

describe('TurkeyFlagComponent', () => {
  let component: TurkeyFlagComponent;
  let fixture: ComponentFixture<TurkeyFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurkeyFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeyFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
