import { TestBed } from '@angular/core/testing';

import { NgxTogetherBasicComponentService } from './ngx-together-basic-component.service';

describe('NgxTogetherBasicComponentService', () => {
  let service: NgxTogetherBasicComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTogetherBasicComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
