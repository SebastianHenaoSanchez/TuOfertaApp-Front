import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarofertasadminComponent } from './listarofertasadmin.component';

describe('ListarofertasadminComponent', () => {
  let component: ListarofertasadminComponent;
  let fixture: ComponentFixture<ListarofertasadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarofertasadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarofertasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
