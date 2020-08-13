import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpEmpleadoComponent } from './up-empleado.component';

describe('UpEmpleadoComponent', () => {
  let component: UpEmpleadoComponent;
  let fixture: ComponentFixture<UpEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
