import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { ServiciosaService } from 'src/app/services/serviciosa.service';

@Component({
  selector: 'app-buscar-empledo',
  templateUrl: './buscar-empledo.component.html',
  styleUrls: ['./buscar-empledo.component.css']
})
export class BuscarEmpledoComponent implements OnInit {
  empleado:Clientes =
  {
    id: null,
    cedula:'',
    nombre:'',
    apellidos:'',
    telefono:'',
    email: '',
    direccion:'',
    ciudad:'',
    rol:''
  }

  

  @HostBinding('class') classes ='row';

  cedula:any;
  constructor(  private router: Router, private serviciosaService: ServiciosaService) { }

  ngOnInit(): void {
  }


  traerEm(){
    
   
  }


  traerEmpleado(cedula:any){
    
       this.router.navigate(['traer_empleados/',this.cedula]);
     
  }




}
