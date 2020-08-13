

import { Component, OnInit,HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Clientes } from 'src/app/models/clientes';
import { ServiciosaService } from 'src/app/services/serviciosa.service';
import { any } from 'bluebird';


@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrls: ['./update-empleado.component.css']
})


export class UpdateEmpleadoComponent implements OnInit { 


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
  id1: any;

  constructor(private serviciosaService: ServiciosaService, private router: Router , private activedRoute: ActivatedRoute) { }
  
      ngOnInit(){
          this.traerEmpleado();
      }


  traerEmpleado(){ 
  const params = this.activedRoute.snapshot.params;      
  
  
  if(params.cedula){ 
    this.serviciosaService.getEmpleado(params.cedula).subscribe( 
      res=>{ 
        this.array=res; 
          this.empleado= this.array[0];
              
    },
      err=>console.error("NO HAY RESPUESTA  ",err)
        )
      }
    }

updateEmpleado(){
          this.serviciosaService.upEmpleado( this.empleado.id,this.empleado).subscribe( 
        res=>{          
            console.log("Empleado modificado"); 
            this.volver()             
      },
        err=>console.error("NO HAY RESPUESTA  ",err)
      )} 



volver(){    
  this.router.navigate(['inicioempleados']);
}


  }
