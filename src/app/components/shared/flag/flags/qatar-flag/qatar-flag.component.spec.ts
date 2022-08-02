import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QatarFlagComponent } from './qatar-flag.component';

describe('QatarFlagComponent', () => {
  let component: QatarFlagComponent;
  let fixture: ComponentFixture<QatarFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QatarFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QatarFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
