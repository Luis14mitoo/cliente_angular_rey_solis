import { TestBed } from '@angular/core/testing';

import { ServiciosaService } from './serviciosa.service';

describe('ServiciosaService', () => {
  let service: ServiciosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
