import { TestBed } from '@angular/core/testing';

import { UserAthunGuard } from './user-athun.guard';

describe('UserAthunGuard', () => {
  let guard: UserAthunGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAthunGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
