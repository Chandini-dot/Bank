import { TestBed } from '@angular/core/testing';

import { BanklistService } from './banklist.service';

describe('BanklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanklistService = TestBed.get(BanklistService);
    expect(service).toBeTruthy();
  });
});
