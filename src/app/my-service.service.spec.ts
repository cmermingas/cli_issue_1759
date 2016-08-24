/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MyServiceService } from './my-service.service';

describe('Service: MyService', () => {
  beforeEach(() => {
    addProviders([MyServiceService]);
  });

  it('should ...',
    inject([MyServiceService],
      (service: MyServiceService) => {
        expect(service).toBeTruthy();
      }));
});
