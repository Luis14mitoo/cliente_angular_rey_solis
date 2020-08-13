
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { ServiciosaService } from 'src/app/services/serviciosa.service';

@Component({
  selector: 'app-up-empleado',
  templateUrl: './up-empleado.component.html',
  styleUrls: ['./up-empleado.component.css']
})
export class UpEmpleadoComponent implements OnInit {
  empleado:Clientes =
  {
    id: 0,
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
  constructor( private router: Router, private serviciosaService: ServiciosaService) { }

  ngOnInit(): void {
  }


  traerEm(){
    
   
  }


  traerEmpleado(cedula:any){
    
       this.router.navigate(['update-empleado/',this.cedula]);
     
  }




}
