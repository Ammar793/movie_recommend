/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateDatabaseService } from './update-database.service';

describe('UpdateDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateDatabaseService]
    });
  });

  it('should ...', inject([UpdateDatabaseService], (service: UpdateDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
