import { Component, OnInit,HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Clientes } from 'src/app/models/clientes';
import { ServiciosaService } from 'src/app/services/serviciosa.service';


@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})



export class FormEmpleadoComponent implements OnInit {


empleado:Clientes=
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

  array:any=[];
 

  constructor(private serviciosaService: ServiciosaService, private router: Router , private activedRoute: ActivatedRoute) { }
  
  ngOnInit(){
      this.traerEmpleado();
  }


  traerEmpleado(){ 
  const params = this.activedRoute.snapshot.params;      
  console.log("El params.id  ",params.cedula);
  
  if(params.cedula){ 
    this.serviciosaService.getEmpleado(params.cedula).subscribe( 
      res=>{ 
        this.array=res; 
          this.empleado= this.array[0];
          console.log("El id es  ",this.empleado);
                  
    },
      err=>console.error("NO HAY RESPUESTA  ",err)
    )  
  }
  
}


volver(){    
  this.router.navigate(['inicioempleados']);
}


  }
