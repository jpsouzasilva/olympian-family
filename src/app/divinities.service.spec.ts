import { TestBed, inject } from '@angular/core/testing';

import { DivinitiesService } from './divinities.service';

describe('DivinitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DivinitiesService]
    });
  });

  it('should be created', inject([DivinitiesService], (service: DivinitiesService) => {
    expect(service).toBeTruthy();
  }));
});
