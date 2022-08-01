import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagContainerComponent } from './flag-container.component';

describe('FlagContainerComponent', () => {
  let component: FlagContainerComponent;
  let fixture: ComponentFixture<FlagContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
