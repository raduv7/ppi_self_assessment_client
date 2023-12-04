import { TestBed } from '@angular/core/testing';

import { AuthenticationMapperService } from './authentication-mapper.service';

describe('AuthenticationMapperService', () => {
  let service: AuthenticationMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
