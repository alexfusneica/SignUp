import { TestBed } from '@angular/core/testing';

import { Signup.Service.TsService } from './signup.service.ts.service';

describe('Signup.Service.TsService', () => {
  let service: Signup.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Signup.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
