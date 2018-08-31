import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import {ActivatedRoute} from '@angular/router'
import { Routes, Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-editarnegocio',
  templateUrl: './editarnegocio.component.html',
  styleUrls: ['./editarnegocio.component.css']
})
export class EditarnegocioComponent implements OnInit {
  idadmin : any;
  public message : any;
  idnegocio : any;
  
  

 public negoc: object = {
    idadmin: '',
    idnegocio:'',
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
};

  constructor(private get: ServicioRegistro, private edit: ServicioRegistro, private router : ActivatedRoute, private route: Router) {
    this.router.params.subscribe (parametros =>{
      this.idnegocio = parametros.id;
      this.negoc['idnegocio']= parametros.id;
      console.log (this.idnegocio);
      //this.registro["idadmin"]=parametros.id;
      this.traerNegocio(this.idnegocio);
    })
   }


  ngOnInit() {
  }


  editar(){
    console.log(this.registro);
    
    this.edit.postNegocio(this.registro).subscribe(
      Response => {
        this.message ="negocio editado";
        console.log(this.message);
        this.route.navigate(['administrador', this.idadmin]);
      }, error =>{
        console.log("error al editar")

      });
  }

  traerNegocio(id : any){
    this.get.getNegocio(id).subscribe(
      Response => {
        console.log(Response.negocio[0].idadmin);
        this.negoc['idadmin']= Response.negocio[0].idadmin;
        this.idadmin =Response.negocio[0].idadmin;
       /*  this.negoc['idnegocio']= Response.negocio.idnegocio;
        this.negoc['idadmin']= Response.negocio.idadmin;
        this.negoc['nombreempresa']= Response.nombreempresa;
        this.negoc['tiponegocio']= Response.tiponegocio;
        this.negoc['nit']= Response.nit;
        this.negoc['ubicacion']= Response.ubicacion;
        this.negoc['foto']= Response.foto;
        this.negoc['detalle']= Response.detalle; */
        console.log(this.negoc);
      }
    )
  }
}
