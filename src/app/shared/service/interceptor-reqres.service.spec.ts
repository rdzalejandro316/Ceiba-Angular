import { TestBed } from '@angular/core/testing';

import { InterceptorReqresService } from './interceptor-reqres.service';

describe('InterceptorReqresService', () => {
  let service: InterceptorReqresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorReqresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
