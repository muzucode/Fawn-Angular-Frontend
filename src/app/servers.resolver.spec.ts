import { TestBed } from '@angular/core/testing';

import { ServersResolver } from './servers.resolver';

describe('ServersResolver', () => {
  let resolver: ServersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ServersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
