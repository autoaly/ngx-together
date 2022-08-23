import { TestBed } from '@angular/core/testing';

import { NgxTogetherButtonService } from './ngx-together-button.service';

describe('NgxTogetherButtonService', () => {
  let service: NgxTogetherButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTogetherButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
