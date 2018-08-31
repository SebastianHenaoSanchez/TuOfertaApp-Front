import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarnegocioComponent } from './editarnegocio.component';

describe('EditarnegocioComponent', () => {
  let component: EditarnegocioComponent;
  let fixture: ComponentFixture<EditarnegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarnegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarnegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
