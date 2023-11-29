import { TestBed } from '@angular/core/testing';

import { PesamentosService } from './pesamentos.service';

describe('PesamentosService', () => {
  let service: PesamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
