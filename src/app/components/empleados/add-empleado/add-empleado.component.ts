import { Component, OnInit,HostBinding } from '@angular/core';
import { Router} from '@angular/router';

import { Clientes } from 'src/app/models/clientes';
import { ServiciosaService } from 'src/app/services/serviciosa.service';


@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

  @HostBinding('class') classes ='row';

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



  constructor(private serviciosaService: ServiciosaService, private router: Router ) { }

  ngOnInit(): void {
  }




  addEm(){   
    delete this.empleado.id;
    
      this.serviciosaService.addEmpleado(this.empleado).subscribe(
        res=>{
          console.log(res);         
          this.volver()         
        },
        err=>console.error(err)
        )
              
      }
      
      volver(){    
        this.router.navigate(['inicioempleados']);
      }
    
}

