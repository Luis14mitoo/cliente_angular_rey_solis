import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InicioComponent } from './components/inicio/inicio.component';
import { InicioEmpleadoComponent } from './components/empleados/inicio-empleado/inicio-empleado.component';
import { ListarEmpleadosComponent } from './components/empleados/listar-empleados/listar-empleados.component';
import { BuscarEmpledoComponent } from './components/empleados/buscar-empledo/buscar-empledo.component';
import { FormEmpleadoComponent } from './components/empleados/form-empleado/form-empleado.component';
import { AddEmpleadoComponent } from './components/empleados/add-empleado/add-empleado.component';
import { EliminarEmpleadoComponent } from './components/empleados/eliminar-empleado/eliminar-empleado.component';
import { UpdateEmpleadoComponent } from './components/empleados/update-empleado/update-empleado.component';
import { UpEmpleadoComponent } from './components/empleados/up-empleado/up-empleado.component';



const routes: Routes = [
{path: '',
redirectTo: 'inicio',
pathMatch: 'full'
},
{
  path:'inicio',
  component: InicioComponent
},
{
 path:'inicioempleados',
 component:InicioEmpleadoComponent
},
{
  path:'listar_empleados',
  component: ListarEmpleadosComponent
},
{
  path:'buscar_empleados',
  component: BuscarEmpledoComponent
},
{
  path:'traer_empleados/:cedula',
  component: FormEmpleadoComponent
},
{
  path:'add-empleado',
  component: AddEmpleadoComponent
},
{
  path:'eliminar-empleado',
  component: EliminarEmpleadoComponent
},
{
  path:'update-empleado/:cedula',
  component: UpdateEmpleadoComponent
},
{
  path:'up-empleado',
  component: UpEmpleadoComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
