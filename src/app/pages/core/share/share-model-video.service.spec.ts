import { TestBed } from '@angular/core/testing';

import { ShareModelVideoService } from './share-model-video.service';

describe('ShareModelVideoService', () => {
  let service: ShareModelVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareModelVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
