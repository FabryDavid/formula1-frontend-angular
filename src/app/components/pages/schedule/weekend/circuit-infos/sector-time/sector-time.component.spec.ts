import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorTimeComponent } from './sector-time.component';

describe('SectorTimeComponent', () => {
  let component: SectorTimeComponent;
  let fixture: ComponentFixture<SectorTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectorTimeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
