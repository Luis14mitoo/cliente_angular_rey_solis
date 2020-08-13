import { Component, OnInit,HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Clientes } from 'src/app/models/clientes';
import { ServiciosaService } from 'src/app/services/serviciosa.service';


@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {

//  @HostBinding('class') classes ='row';
  

  
  cliente:Clientes=
  {
    id: 0,
    nombre:'',
    apellidos:'',
    telefono:'',
    email: '',
    direccion:'',
    ciudad:'',
    rol:''
  }



  constructor(private serviciosaService: ServiciosaService, private router: Router , ) { }

  ngOnInit(){

    this.serviciosaService.getClientes().subscribe(
      res=>{

       this.cliente=res;
        console.log(this.cliente);       
      },
      err=>console.error(err)
      )
    
    
    }
    
  }
