import { TestBed } from '@angular/core/testing';

import { LifeControlService } from './life-control.service';

describe('LifeControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifeControlService = TestBed.get(LifeControlService);
    expect(service).toBeTruthy();
  });
});
