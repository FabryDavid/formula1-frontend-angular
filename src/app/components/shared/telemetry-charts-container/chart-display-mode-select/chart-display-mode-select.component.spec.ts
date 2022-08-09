import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDisplayModeSelectComponent } from './chart-display-mode-select.component';

describe('ChartDisplayModeSelectComponent', () => {
  let component: ChartDisplayModeSelectComponent;
  let fixture: ComponentFixture<ChartDisplayModeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartDisplayModeSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDisplayModeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
