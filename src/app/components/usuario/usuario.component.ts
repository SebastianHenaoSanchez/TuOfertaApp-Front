import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ServicioRegistro } from '../../service/servicio.registro';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  showFiller = false;
  id : any;
  message: any;
  persona: any[] = [];
  oferta: any;
  lat: number = 6.264716;
  lng: number = -75.566206;
  constructor(private router : ActivatedRoute, private traerDatos:ServicioRegistro) { 
    this.router.params.subscribe ( parametros =>{
      this.id = parametros.id;
      console.log(parametros);
    })
    this.traerUsuario();
    this.ofertas();
  }

  ngOnInit() {
  }

  traerUsuario (){
    this.traerDatos.getUserId(this.id).subscribe(
      Response => {
        console.log("trayendo datos")
        //console.log(Response)
        this.persona = Response.persona;
        console.log("persona");
        console.log(this.persona);
      }, error => {
        this.message ="Error en login"
        console.log(this.message)

      }

    );

  }

  ofertas(){
    this.traerDatos.getOfer().subscribe(
      Response => {
        this.oferta= Response.oferta; 
        console.log(this.oferta);
      }, error => {
        console.log("error listando las ofertas");
      }
    )
  }

}
