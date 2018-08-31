import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ServicioRegistro } from '../../service/servicio.registro';

//para ir a otros componentes
import { Routes, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-registraroferta',
  templateUrl: './registraroferta.component.html',
  styleUrls: ['./registraroferta.component.css']
})
export class RegistrarofertaComponent implements OnInit {

  idnegocio : any;
  public message ="";

  ofer: object = {
    idnegocio: '',
    producto:'',
    detalle:'',
    valor:'',
    descuento:'',
    foto:'',
    fechainicio:'',
    fechafin:'',
};
oferta: any [] = [this.ofer];

registro : object = {
  oferta: this.oferta
}


  constructor(private navegar: Router, private router: ActivatedRoute, private registrar: ServicioRegistro) {
    this.router.params.subscribe (parametros =>{
      this.idnegocio = parametros.id;
      this.ofer['idnegocio']= parametros.id;
      //this.registro["idadmin"]=parametros.id;
      
    })
   }

  ngOnInit() {
  }

  crearOferta(){
    this.registrar.postOfertas(this.registro).subscribe(
      Response =>{
        this.message = "Oferta Creada"
        console.log(this.message)

        this.navegar.navigate(['oferta', this.idnegocio]);
      }, error => {
        this.message = "No se pudó registrar"
      });
  }

}
