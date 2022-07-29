import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCloseButtonComponent } from './open-close-button.component';

describe('OpenCloseButtonComponent', () => {
  let component: OpenCloseButtonComponent;
  let fixture: ComponentFixture<OpenCloseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenCloseButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCloseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
