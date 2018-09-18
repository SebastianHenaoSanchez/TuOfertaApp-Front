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
  public formNegocio: FormGroup;
  public formTipoOferta: FormGroup;

  contador : any;
  showFiller = false;
  //para los fitros melos
  tiposNegocios:any[] = ['Bar','Restaurante','Comidas Rapidas', 'Otros'];
  tiposOfertas:any[] = ['Descuento','Promocion'];
  tiposDescuentos : any[] =['10%','20%','30%','40%','50%','60%','70%','80%'] ;
  tiposPromociones: any [] = ['2x1','cumpleaños','hora feliz','otros'];
  seleccionado: any = [false,false];
  listaNegocioSeleccionados :any []=[];
  listaTipoOfertasSeleccionadas : any []=[];
  promocionSeleccionada : any []= [];
  negocioSeleccionado : any [] = [];


  id : any;
  message: any;
  persona: any[] = [];
  oferta: any;
  negocio: any;
  fitrotiponegocio : any;
  lisnego :any[]=[];

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
    this.createformNegocio();
    this.createformTipoOferta();
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
        for(let index =0; index < Response.negocio.length; index++){
          this.traerDatos.getOfertasNegocio(Response.negocio[index].idnegocio).subscribe(
            Data =>{
              if(Data.oferta.length > 0){
                this.lisnego.push(Response.negocio[index]); 
              }
            })
        }
        //console.log(this.negocio);
      }, error =>{
        console.log("error listando todos los negocios")
      })
   }

  createformNegocio(){
    this.formNegocio = this.formulario.group({
      //tiponegocio:[''],
     // tipooferta: [''],
      tipoComidas:[''],
      tipoBar:[''],
      tipoRestaurante:[''],
      tipoOtros:['']

    })
  }

  createformTipoOferta(){
    this.formTipoOferta = this.formulario.group({
      //tiponegocio:[''],
     // tipooferta: [''],
      promocion:[''],
      descuento:[''],
      

    })
  }

    filtrar(){
      this.llenarSelecciones();
    }

    llenarSelecciones(){
      if(this.formNegocio.value.tipoComidas){
        this.listaNegocioSeleccionados.push('Comidas Rapidas');
      }if (this.formNegocio.value.tipoOtros){
        this.listaNegocioSeleccionados.push('Otros');
      }if(this.formNegocio.value.tipoBar){
        this.listaNegocioSeleccionados.push('Bares');
      }if (this.formNegocio.value.tipoRestaurante){
        this.listaNegocioSeleccionados.push('Restaurantes');
      }

      for (let i=0 ; i< this.listaNegocioSeleccionados.length ; i ++){
        console.log("negocio"+i+": "+this.listaNegocioSeleccionados[i]);
      }

      if(this.formTipoOferta.value.promocion){
        this.listaTipoOfertasSeleccionadas.push('promocion')
      }
      if(this.formTipoOferta.value.descuento){
        this.listaTipoOfertasSeleccionadas.push('descuento')
      }

      for (let i=0 ; i< this.listaTipoOfertasSeleccionadas.length ; i ++){
        console.log("oferta"+i+": "+this.listaTipoOfertasSeleccionadas[i]);
      }
      this.listaTipoOfertasSeleccionadas = []
      this.listaNegocioSeleccionados = [];
      console.log("array ofertas seleccionadas: "+this.listaTipoOfertasSeleccionadas.length);
      console.log("tamaño negocios seleccionados: "+ this.listaNegocioSeleccionados.length);
    }
  //filtrado con una seleccion
 /*   filtrar (){
   
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
     this.lisnego = [];
    for(let index =0; index < count; index++){
    this.filtrado.filtro(listanegocios[index].idnegocio, this.form.value.tipooferta).subscribe(
      Response =>{
        console.log("cuando listo uno"+Response.oferta.length);
        console.log(Response.oferta)
        
        if(Response.oferta.length >= 1){
          //this.negociosfiltrados.push(listanegocios[index]);
          this.lisnego.push(listanegocios[index]); 
           //console.log("agregando negocio:"+ JSON.stringify(this.negociosfiltrados));
           console.log("negocios:"+ JSON.stringify(this.negocio[index]));
        }

      }, error =>{
        console.log("error cargando o este negocio no tiene ofertas de ese tipo o caducaron")
       
      })
    }
  
   } */
}
