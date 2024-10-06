import { TestBed } from '@angular/core/testing';

import { FormWidgetService } from './form-widget.service';

describe('FormWidgetService', () => {
  let service: FormWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
