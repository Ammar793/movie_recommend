/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetImageServiceService } from './get-image-service.service';

describe('GetImageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetImageServiceService]
    });
  });

  it('should ...', inject([GetImageServiceService], (service: GetImageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
