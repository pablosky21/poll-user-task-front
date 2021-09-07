import { TestBed } from '@angular/core/testing';

import { UserPollServiceService } from './user-poll-service.service';

describe('UserPollServiceService', () => {
  let service: UserPollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
