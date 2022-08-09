import {TestBed} from '@angular/core/testing';

import {TelemetryServiceService} from './telemetry-service.service';

describe('TelemetryServiceService', () => {
  let service: TelemetryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelemetryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
