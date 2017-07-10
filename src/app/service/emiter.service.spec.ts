import { TestBed, inject } from '@angular/core/testing';

import { EmiterService } from './emiter.service';

describe('EmiterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmiterService]
    });
  });

  it('should be created', inject([EmiterService], (service: EmiterService) => {
    expect(service).toBeTruthy();
  }));
});
