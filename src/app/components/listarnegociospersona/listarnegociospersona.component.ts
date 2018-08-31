import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import {ActivatedRoute} from '@angular/router'

// para el dialog
import {MatDialog} from '@angular/material/dialog';
import { RegistrarComponent } from '../registrar/registrar.component';


@Component({
  selector: 'app-listarnegociospersona',
  templateUrl: './listarnegociospersona.component.html',
  styleUrls: ['./listarnegociospersona.component.css']
})
export class ListarnegociospersonaComponent implements OnInit {
  id : any;
  public negocios:any = [];
 
  //para editar en un modal
  
/*   negoc: object = {
    idadmin: '',
   // idnegocio:'',
    nombreempresa:'',
    tiponegocio:'',
    nit:'',
    ubicacion:'',
    foto:'',
    detalle:'',
};
negocio: any [] = [this.negoc];

registro: object ={
  negocio: this.negocio
};  */
  constructor(private router : ActivatedRoute, private traerNegocio:ServicioRegistro, private deleteNegocio:ServicioRegistro, private dialog: MatDialog) {
    this.router.params.subscribe (parametros =>{
      this.id = parametros.id;
      console.log(parametros);

      this.traerNegocios()
    })
   }


  ngOnInit() {
  }

  traerNegocios (){
    this.traerNegocio.getNegocioPersona(this.id).subscribe(
      Response => {
        console.log("datos negocios")
       
        this.negocios = Response.negocio;
        console.log(this.negocios)
      }, error => {
        console.log ("Error listando negocios")
      });
  }

  eliminarNegocio (idnego : any){
    console.log(idnego);
    this.deleteNegocio.deleteNegocio(idnego).subscribe(
      Response => {
        console.log("negocio eliminado")
        this.traerNegocios();
      }, error =>{
        console.log ("no se pudo eliminar")
      })
  }

  //para hacer el dialog
/* openDialog(){
  let dialogRef = this.dialog.open(RegistrarComponent, {
    height: '400px',
    width: '600px',


  });
} */
  editar(){

  }

}
