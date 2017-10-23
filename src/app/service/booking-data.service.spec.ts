import { TestBed, inject } from '@angular/core/testing';

import { BookingDataService } from './booking-data.service';

describe('BookingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingDataService]
    });
  });

  it('should be created', inject([BookingDataService], (service: BookingDataService) => {
    expect(service).toBeTruthy();
  }));
});
