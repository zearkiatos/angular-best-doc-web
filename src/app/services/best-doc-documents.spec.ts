import { TestBed } from '@angular/core/testing';

import { BestDocDocuments } from './best-doc-documents';

describe('BestDocDocuments', () => {
  let service: BestDocDocuments;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestDocDocuments);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
