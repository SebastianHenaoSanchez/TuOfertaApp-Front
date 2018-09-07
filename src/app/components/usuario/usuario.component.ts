import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ServicioRegistro } from '../../service/servicio.registro';

//angular material
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { OfertaComponent } from '../oferta/oferta.component';

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
  negocio: any;

  lat: number = 6.264716;
  lng: number = -75.566206;
  constructor(private bottomSheet: MatBottomSheet, private router : ActivatedRoute, private traerDatos:ServicioRegistro) { 
    this.router.params.subscribe ( parametros =>{
      this.id = parametros.id;
      console.log(parametros);
    })
    this.traerUsuario();
    //this.ofertas();
    this.negocios();
  }

  ngOnInit() {
  }
// metodo para abrir bottom sheet se ve muy mal
  openBottomSheet(): void {
    this.bottomSheet.open(OfertaComponent);
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
      });
  }

  //este metodo no esta siendo usado por el momento
  ofertas(id:any){
    this.traerDatos.getOfertasNegocio(id).subscribe(
      Response => {
        this.oferta= Response.oferta; 
        console.log(this.oferta);
      }, error => {
        console.log("error listando las ofertas");
      })
  }

   negocios(){
    this.traerDatos.getNegocios().subscribe(
      Response =>{
        this.negocio = Response.negocio;
        console.log(this.negocio);
      }, error =>{
        console.log("error listando todos los negocios")
      }
    )
   }

}
