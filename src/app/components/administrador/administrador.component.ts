import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ServicioRegistro } from '../../service/servicio.registro';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  id : any;
  message: any;
  persona: any[] = [];
  currentContainer : any;

  constructor( private router : ActivatedRoute, private traerDatos:ServicioRegistro ) {
    this.router.params.subscribe ( parametros =>{
      this.id = parametros.id;
      console.log(parametros);
    })
    this.traerAmin()
   }

  ngOnInit() {
  }

  traerAmin (){
    this.traerDatos.getUserId(this.id).subscribe(
      Response => {
        console.log("trayendo datos")
        console.log(Response)
        this.persona = Response.persona;
      }, error => {
        this.message ="Error en login"
        console.log(this.message)

      }

    );

  }

  switchContainer(containerName) {
    switch  (containerName) {
    case '1':
    this.currentContainer =  'perfil';
    break;
    case '2':
    this.currentContainer =  'registronegocio';
    break;
    case '3':
    this.currentContainer = 'listarnegociospersona';
    break;
      
    
    }
    }

}
