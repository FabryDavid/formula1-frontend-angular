import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NetherlandsFlagComponent} from './netherlands-flag.component';

describe('NetherlandsFlagComponent', () => {
  let component: NetherlandsFlagComponent;
  let fixture: ComponentFixture<NetherlandsFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetherlandsFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetherlandsFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
