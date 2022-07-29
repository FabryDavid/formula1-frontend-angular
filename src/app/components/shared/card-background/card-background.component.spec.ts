import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBackgroundComponent } from './card-background.component';

describe('CardBackgroundComponent', () => {
  let component: CardBackgroundComponent;
  let fixture: ComponentFixture<CardBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
