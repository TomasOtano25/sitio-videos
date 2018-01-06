import { TestBed, inject } from '@angular/core/testing';

import { ListaDeVideosService } from './lista-de-videos.service';

describe('ListaDeVideosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaDeVideosService]
    });
  });

  it('should be created', inject([ListaDeVideosService], (service: ListaDeVideosService) => {
    expect(service).toBeTruthy();
  }));
});
