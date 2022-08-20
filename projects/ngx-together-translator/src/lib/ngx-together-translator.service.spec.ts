import { TestBed } from '@angular/core/testing';

import { NgxTogetherTranslatorService } from './ngx-together-translator.service';

describe('NgxTogetherTranslatorService', () => {
  let service: NgxTogetherTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTogetherTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
