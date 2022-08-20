import { TestBed } from '@angular/core/testing';

import { NgxTogetherLabelService } from './ngx-together-label.service';

describe('NgxTogetherLabelService', () => {
  let service: NgxTogetherLabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTogetherLabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
