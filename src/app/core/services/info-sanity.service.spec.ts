import { TestBed } from '@angular/core/testing';

import { InfoSanityService } from './info-sanity.service';

describe('InfoSanityService', () => {
  let service: InfoSanityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoSanityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
