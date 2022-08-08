import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotGroupComponent } from './hotspot-group.component';

describe('HotspotGroupComponent', () => {
  let component: HotspotGroupComponent;
  let fixture: ComponentFixture<HotspotGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotspotGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
