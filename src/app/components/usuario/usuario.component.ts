import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ServicioRegistro } from '../../service/servicio.registro';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id : any;
  message: any;
  persona: any[] = [];

  constructor(private router : ActivatedRoute, private traerDatos:ServicioRegistro) { 
    this.router.params.subscribe ( parametros =>{
      this.id = parametros.id;
      console.log(parametros);
    })
    this.traerUsuario()
  }

  ngOnInit() {
  }

  traerUsuario (){
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

}
