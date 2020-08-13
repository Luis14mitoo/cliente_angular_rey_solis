import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { ServiciosaService } from 'src/app/services/serviciosa.service';
import { any } from 'bluebird';


@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.css']
})
export class EliminarEmpleadoComponent implements OnInit {
 
 
   emp:Number;
 constructor(private serviciosaService: ServiciosaService, private router: Router ) { }
  

  ngOnInit(): void {

}

  deleteEm(){ 
    this.serviciosaService .deleteEmpleado(this.emp).subscribe( 
    res=>{       
        console.log("Empleado eliminado "); 
        this. volver();       
        },
          err=>console.error("NO HAY RESPUESTA  ",err)
        )}   


  volver(){    
  this.router.navigate(['inicioempleados']);
  }
        
}

