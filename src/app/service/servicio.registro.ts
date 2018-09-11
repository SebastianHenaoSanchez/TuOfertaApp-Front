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
  url2: string = 'http://localhost:8095/negocios';
  url3: string = 'http://localhost:8070/ofertas';
  url4: string = 'http://localhost:8091/orquestador/registrar/negocios';
  url5: string = 'http://localhost:8070/ofertas/filtro/';
  public defaultHeaders = new HttpHeaders();
  constructor(private http: HttpClient) { }

  // SERVICIO PERSONA
    postUser ( registro: any ): Observable<any> {
    const body = JSON.stringify( registro );
    let headers = this.defaultHeaders;
    headers = headers.set("Content-Type", "application/json"); 
    return this.http.post( this.url+"/registrar",  body, {headers: headers}); 
    }
    
    setUser ( registro: any ): Observable<any> {
      const body = JSON.stringify( registro );
      let headers = this.defaultHeaders;
      headers = headers.set("Content-Type", "application/json"); 
      return this.http.put( this.url+"/editar",  body, {headers: headers}); 
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

  deleteUser(deleterequest: any): Observable<any>{
    const body = JSON.stringify( deleterequest );
    let headers = this.defaultHeaders;
    headers = headers.set("Content-Type", "application/json"); 
    return this.http.post(this.url + "/eliminar",body ,{headers: headers});
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
  return this.http.post( this.url4,  body, {headers: headers}); 
  }

  getNegocios (): Observable<any>{
    return this.http.get (this.url2 +"/listar");
  }

  getNegocioPersona (iduser : any): Observable <any>{
    return this.http.get (this.url2 + "/listar/idadmin/" + iduser);
  }

  deleteNegocio (idnegocio : any): Observable <any>{
    return this.http.delete (this.url2 + "/eliminar/" + idnegocio);
  }

  editNegocio (negocio : any): Observable <any> {
    const body = JSON.stringify( negocio );
    let headers = this.defaultHeaders;
  headers = headers.set("Content-Type", "application/json"); 
    return this.http.put (this.url2 + "/editar", body, {headers: headers} );
  }

  getNegocio(id:String):Observable<any>{
    return this.http.get(this.url2 + "/listar/idnegocio/" + id);
    
    }
    
  getTipoNegocio(tipo :any): Observable<any>{
    return this.http.get(this.url2 +"/listar/tiponegocio/"+ tipo);
  }


  //SERVICIO OFERTAS

  getOfertas(id: String): Observable<any>{
    return this.http.get(this.url3+"/listar/idoferta/" + id);
  }

  getOfer(): Observable <any>{
    return this.http.get(this.url3 + "/listar");
  }
  getOfertasNegocio (id: String): Observable<any>{
    return this.http.get(this.url3 + "/listar/idnegocio/" + id);
  }

  postOfertas ( oferta: any ): Observable<any> {
    const body = JSON.stringify( oferta );
    let headers = this.defaultHeaders;
    headers = headers.set("Content-Type", "application/json"); 
    return this.http.post( this.url3+"/registrar",  body, {headers: headers}); 
    }

    deleteOferta (idoferta : any): Observable <any>{
      return this.http.delete (this.url3 + "/eliminar/" + idoferta);
    }

  filtro(idnegocio:any,tipoofer:any): Observable <any>{
    return this.http.get (this.url5 +idnegocio +"/"+ tipoofer);
  }
}