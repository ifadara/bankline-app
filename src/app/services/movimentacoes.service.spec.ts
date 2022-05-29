import { TestBed } from '@angular/core/testing';

import { movimentacoesService } from './movimentacoes.service';

describe('movimentacoesService', () => {
  let service: movimentacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(movimentacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
