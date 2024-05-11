import { TestBed } from '@angular/core/testing';

import { NgZorroFormlyService } from './ng-zorro-formly.service';

describe('NgZorroFormlyService', () => {
  let service: NgZorroFormlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgZorroFormlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
