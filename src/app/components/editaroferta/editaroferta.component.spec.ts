import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarofertaComponent } from './editaroferta.component';

describe('EditarofertaComponent', () => {
  let component: EditarofertaComponent;
  let fixture: ComponentFixture<EditarofertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarofertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
