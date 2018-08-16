import { TestBed, inject } from '@angular/core/testing';

import { ServicioRegistro } from './servicio.registro';

describe('ServicioRegistro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioRegistro]
    });
  });

  it('should be created', inject([ServicioRegistro], (service: ServicioRegistro) => {
    expect(service).toBeTruthy();
  }));
});
 