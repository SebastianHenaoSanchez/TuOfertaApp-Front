import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-registrar-negocio',
  templateUrl: './registrar-negocio.component.html',
  styleUrls: ['./registrar-negocio.component.css']
})
export class RegistrarNegocioComponent implements OnInit {
  id : any;
  public message ="";

  negoc: object = {
    idadmin: '',
    nombreempresa:'',
    tiponegocio:'',
    correo:'',
    nit:'',
    ubicacion:'',
    foto:'',
    detalle:'',
};
negocio: any [] = [this.negoc];

registro: object ={
  negocio: this.negocio
};

  constructor(private registrar: ServicioRegistro, private router : ActivatedRoute) {
    this.router.params.subscribe (parametros =>{
      this.id = parametros.id;
      this.negoc['idadmin']= parametros.id;
      console.log (this.id);
      //this.registro["idadmin"]=parametros.id;
      
    })
   }

  ngOnInit() {
  }


  crear() {
    /* this.registro[0].idadmin=this.id; */
   // console.log (this.registro[0].idadmin);
    
    
    this.registrar.postNegocio(this.registro).subscribe(
      Response =>{
        this.message="negocio creado"
        console.log(this.message)
    }, error => {
      this.message ="Error"
    });
}
}
