import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarofertaComponent } from './registraroferta.component';

describe('RegistrarofertaComponent', () => {
  let component: RegistrarofertaComponent;
  let fixture: ComponentFixture<RegistrarofertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarofertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
