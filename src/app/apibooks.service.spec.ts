import { TestBed } from '@angular/core/testing';

import { ApiService } from './apibooks.service';

describe('ApibooksService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
