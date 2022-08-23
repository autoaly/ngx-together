import { TestBed } from '@angular/core/testing';

import { NgxTogetherDateService } from './ngx-together-date.service';

describe('NgxTogetherDateService', () => {
  let service: NgxTogetherDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTogetherDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
