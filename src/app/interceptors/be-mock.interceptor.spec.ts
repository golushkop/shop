import { TestBed } from '@angular/core/testing';

import { BeMockInterceptor } from './be-mock.interceptor';

describe('BeMockInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BeMockInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BeMockInterceptor = TestBed.inject(BeMockInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
