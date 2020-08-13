import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import {Clientes} from '../../app/models/clientes';
@Injectable({
  providedIn: 'root'
})
export class ServiciosaService {


  API_URI='http://localhost/api';

  
  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get(`${this.API_URI}/clientes`);
  }

  getEmpleado(cedula:any){
    return this.http.get(`${this.API_URI}/clientes/${cedula}`);
    
  }

  addEmpleado(empleado:any){
   
   return  this.http.post(`${this.API_URI}/clientes/nuevo`,empleado);
  
    
  }


  upEmpleado(id:any, empleado:any){ 
      
    delete empleado.id;
    return  this.http.put(`${this.API_URI}/clientes/modificar/${id}`,empleado);
   
     
   }

   deleteEmpleado(id:any){   
    return  this.http.delete(`${this.API_URI}/clientes/delete/${id}`);
        
   }


   
}
