import { TestBed } from '@angular/core/testing';

import { CustormerService } from './custormer.service';

describe('CustormerService', () => {
  let service: CustormerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustormerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
