import { TestBed } from '@angular/core/testing';

import { TcourseService } from './tcourse.service';

describe('TcourseService', () => {
  let service: TcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
