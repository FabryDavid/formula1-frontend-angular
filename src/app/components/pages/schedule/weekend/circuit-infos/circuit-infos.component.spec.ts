import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitInfosComponent } from './circuit-infos.component';

describe('CircuitInfosComponent', () => {
  let component: CircuitInfosComponent;
  let fixture: ComponentFixture<CircuitInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
