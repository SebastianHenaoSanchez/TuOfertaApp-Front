import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http , Headers } from '@angular/http';
import { map } from 'rxjs/operators';
// clase que se prepara para inyectarle al componente
@Injectable({
  providedIn: 'root'
})
export class ServicioRegistro {
  url: string = 'http://localhost:8090/personas';
  url2: string = 'http://localhost:8092/negocios';
  
  public defaultHeaders = new HttpHeaders();
  constructor(private http: HttpClient) { }

  // SERVICIO PERSONA
  postUser ( registro: any ): Observable<any> {
    const body = JSON.stringify( registro );
    let headers = this.defaultHeaders;
    headers = headers.set("Content-Type", "application/json"); 
    return this.http.post( this.url+"/registrar",  body, {headers: headers}); 
    }

    getUser(): Observable<any>{
      return this.http.get(this.url+"/listar");
    }

  login(datos: any): Observable<any>{
    let headers = this.defaultHeaders;
    headers = headers.set("Content-Type", "application/json"); 
    return this.http.post( this.url+"/login",  datos, {headers: headers}); 
  }

  getUserId(id: any): Observable<any>{
    return this.http.get(this.url + "/listar/" + id);
  }
 /*  postUser(user: any): Observable<any> {
    return this.http.post(this.url + '/user', user);

  }

  getUser(): Observable<any>{
    return this.http.get(this.url + '/user');
  } 

  deleteUser(id: any): Observable<any>{
    return this.http.delete(this.url + '/user' +'/'+id);
  } 

  editUser(user:any): Observable<any>{
    return this.http.put(this.url + '/user', user )
  }
 */

 //SERVICIO NEGOCIO
 postNegocio ( registro: any ): Observable<any> {
  const body = JSON.stringify( registro );
  let headers = this.defaultHeaders;
  headers = headers.set("Content-Type", "application/json"); 
  return this.http.post( this.url2+"/registrar",  body, {headers: headers}); 
  }

  getNegocioPersona (iduser : any): Observable <any>{
    return this.http.get (this.url2 + "/listar/idadmin/" + iduser);
  }
}