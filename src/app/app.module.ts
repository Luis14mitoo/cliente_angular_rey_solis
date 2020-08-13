import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { InicioComponent } from './components/inicio/inicio.component';
import { InicioEmpleadoComponent } from './components/empleados/inicio-empleado/inicio-empleado.component';
import { ListarEmpleadosComponent } from './components/empleados/listar-empleados/listar-empleados.component';
import { BuscarEmpledoComponent } from './components/empleados/buscar-empledo/buscar-empledo.component';
import { FormEmpleadoComponent } from './components/empleados/form-empleado/form-empleado.component';
import { AddEmpleadoComponent } from './components/empleados/add-empleado/add-empleado.component';
import { EliminarEmpleadoComponent } from './components/empleados/eliminar-empleado/eliminar-empleado.component';
import { UpdateEmpleadoComponent } from './components/empleados/update-empleado/update-empleado.component';
import { UpEmpleadoComponent } from './components/empleados/up-empleado/up-empleado.component';


@NgModule({
  declarations: [
    AppComponent,     
    InicioComponent,
    InicioEmpleadoComponent,
    ListarEmpleadosComponent,
    BuscarEmpledoComponent,
    FormEmpleadoComponent,
    AddEmpleadoComponent,
    EliminarEmpleadoComponent,
    UpdateEmpleadoComponent,
    UpEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
