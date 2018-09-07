import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpersonaComponent } from './editarpersona.component';

describe('EditarpersonaComponent', () => {
  let component: EditarpersonaComponent;
  let fixture: ComponentFixture<EditarpersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
