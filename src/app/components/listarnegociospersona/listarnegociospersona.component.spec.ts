import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarnegociospersonaComponent } from './listarnegociospersona.component';

describe('ListarnegociospersonaComponent', () => {
  let component: ListarnegociospersonaComponent;
  let fixture: ComponentFixture<ListarnegociospersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarnegociospersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarnegociospersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
