import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarnegociosadminComponent } from './listarnegociosadmin.component';

describe('ListarnegociosadminComponent', () => {
  let component: ListarnegociosadminComponent;
  let fixture: ComponentFixture<ListarnegociosadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarnegociosadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarnegociosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
