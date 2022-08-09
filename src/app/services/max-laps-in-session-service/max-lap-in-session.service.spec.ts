import {TestBed} from '@angular/core/testing';

import {MaxLapInSessionService} from './max-lap-in-session.service';

describe('MaxLapInSessionService', () => {
  let service: MaxLapInSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaxLapInSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
