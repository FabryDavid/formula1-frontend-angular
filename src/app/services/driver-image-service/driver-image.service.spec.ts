import { TestBed } from '@angular/core/testing';

import { DriverImageService } from './driver-image.service';

describe('DriverImageService', () => {
  let service: DriverImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
