import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzerbaijanFlagComponent } from './azerbaijan-flag.component';

describe('AzerbaijanFlagComponent', () => {
  let component: AzerbaijanFlagComponent;
  let fixture: ComponentFixture<AzerbaijanFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzerbaijanFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzerbaijanFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
