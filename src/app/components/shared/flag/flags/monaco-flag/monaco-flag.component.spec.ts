import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoFlagComponent } from './monaco-flag.component';

describe('MonacoFlagComponent', () => {
  let component: MonacoFlagComponent;
  let fixture: ComponentFixture<MonacoFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonacoFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonacoFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
