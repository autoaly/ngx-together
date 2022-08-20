import { TestBed } from '@angular/core/testing';

import { NgxTogetherInputService } from './ngx-together-input.service';

describe('NgxTogetherInputService', () => {
  let service: NgxTogetherInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTogetherInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
