import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingaporeFlagComponent } from './singapore-flag.component';

describe('SingaporeFlagComponent', () => {
  let component: SingaporeFlagComponent;
  let fixture: ComponentFixture<SingaporeFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingaporeFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingaporeFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
