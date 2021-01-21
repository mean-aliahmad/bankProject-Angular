import { TestBed } from '@angular/core/testing';

import { HubServiceService } from './hub-service.service';

describe('HubServiceService', () => {
  let service: HubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
