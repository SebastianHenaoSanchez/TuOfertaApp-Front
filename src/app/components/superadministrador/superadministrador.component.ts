import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-superadministrador',
  templateUrl: './superadministrador.component.html',
  styleUrls: ['./superadministrador.component.css']
})
export class SuperadministradorComponent implements OnInit {
  id : any;
  message: any;
  persona: any[] = [];
  currentContainer : any;

  constructor(private router : ActivatedRoute, private traerDatos:ServicioRegistro) {
    this.router.params.subscribe ( parametros =>{
      this.id = parametros.id;
      console.log(parametros);
    })
    this.traerSuper()
   }

  ngOnInit() {
  }

  traerSuper (){
    this.traerDatos.getUserId(this.id).subscribe(
      Response => {
        console.log("trayendo datos")
        console.log(Response)
        this.persona = Response.persona;
      }, error => {
        this.message ="Error trayendo los datos de este superadmin"
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
    this.currentContainer =  'listar';
    break;
    case '3':
    this.currentContainer =  'listarnegociosadmin';
    break;
    case '4':
    this.currentContainer = 'listarofertasadmin';
    break;
    
      
    
    }
    }
}
