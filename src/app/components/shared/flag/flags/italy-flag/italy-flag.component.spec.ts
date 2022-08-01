import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalyFlagComponent } from './italy-flag.component';

describe('ItalyFlagComponent', () => {
  let component: ItalyFlagComponent;
  let fixture: ComponentFixture<ItalyFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItalyFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalyFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
