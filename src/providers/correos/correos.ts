import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CorreosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CorreosProvider {

 /* constructor(public http: HttpClient) {
    console.log('Hello CorreosProvider Provider');
  }
*/

  lista = [
    {nombre: 'angel gonzalez', direccion:'a@a.es', asunto:'hola', mensaje:'te envio un mensaje', fecha:'Lunes, Febrero 2 2018'},
    {nombre: 'rosa lopez', direccion:'r@r.es', asunto:'hola2', mensaje:'este es un mensaje <br/> largo', fecha:'Martes, Febrero 22 2018'}

  ]

  enviados=[];
}
