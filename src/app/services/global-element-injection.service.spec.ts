import { TestBed } from '@angular/core/testing';

import { GlobalElementInjectionService } from './global-element-injection.service';

describe('GlobalElementInjectionService', () => {
  let service: GlobalElementInjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalElementInjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
