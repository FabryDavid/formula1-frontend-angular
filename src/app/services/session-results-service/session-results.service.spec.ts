import { TestBed } from '@angular/core/testing';

import { SessionResultsService } from './session-results.service';

describe('SessionResultsService', () => {
  let service: SessionResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
