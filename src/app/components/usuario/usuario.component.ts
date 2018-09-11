import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ServicioRegistro } from '../../service/servicio.registro';
// para los formularios reactivos
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//angular material
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { OfertaComponent } from '../oferta/oferta.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public form: FormGroup;

  contador : any;
  showFiller = false;
  negociosfiltrados:any[] = [];
  id : any;
  message: any;
  persona: any[] = [];
  oferta: any;
  negocio: any;
  fitrotiponegocio : any;

  lat: number = 6.264716;
  lng: number = -75.566206;

  constructor(private formulario: FormBuilder,
     private bottomSheet: MatBottomSheet, 
     private router : ActivatedRoute, 
     private traerDatos:ServicioRegistro,
    private filtrado: ServicioRegistro) { 
    this.router.params.subscribe ( parametros =>{
      this.id = parametros.id;
      console.log(parametros);
    })
    this.traerUsuario();
    //this.ofertas();
    this.negocios();
    this.createform();
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
      })
   }

  createform(){
    this.form = this.formulario.group({
      tiponegocio:[''],
      tipooferta: ['']

    })
  }
   filtrar (){
   
    this.filtrado.getTipoNegocio(this.form.value.tiponegocio).subscribe(
      Response => {
        console.log("filtro tiponegocio")
        this.fitrotiponegocio = Response.negocio;
        this.contador = Response.negocio.length;
        console.log("Cantidad de negocios:"+this.contador);
       this.filtro(this.fitrotiponegocio, this.contador);
       
      }, error => {
        console.log("error filtrando")
      })
   }

   filtro(listanegocios : any, count:any){
     this.negocio = [];
    for(let index =0; index < count; index++){
    this.filtrado.filtro(listanegocios[index].idnegocio, this.form.value.tipooferta).subscribe(
      Response =>{
        console.log("cuando listo uno"+Response.oferta.length);
        console.log(Response.oferta)
        
        if(Response.oferta.length >= 1){
          //this.negociosfiltrados.push(listanegocios[index]);
          this.negocio.push(listanegocios[index]); 
           //console.log("agregando negocio:"+ JSON.stringify(this.negociosfiltrados));
           console.log("negocios:"+ JSON.stringify(this.negocio[index]));
        }

      }, error =>{
        console.log("error cargando")
       
      })
    }
  
   }
}
