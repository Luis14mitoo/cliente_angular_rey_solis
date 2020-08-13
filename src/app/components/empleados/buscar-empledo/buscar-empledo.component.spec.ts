import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEmpledoComponent } from './buscar-empledo.component';

describe('BuscarEmpledoComponent', () => {
  let component: BuscarEmpledoComponent;
  let fixture: ComponentFixture<BuscarEmpledoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarEmpledoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEmpledoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
