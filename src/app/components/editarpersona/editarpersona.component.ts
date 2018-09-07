import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
//para traer id por la url
import {ActivatedRoute} from '@angular/router'
//para redirigir a otro componente
import { Routes, Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-editarpersona',
  templateUrl: './editarpersona.component.html',
  styleUrls: ['./editarpersona.component.css']
})
export class EditarpersonaComponent implements OnInit {

  id :any ;
  idsuperadmin : any = 'cf7e2532-7483-4cd2-b970-20b065dd58dd';
  public correo : boolean;
    //para hacer el editar personas
person: object = {
  id:'',
  correo:'',
  nombre:'',
  apellidos:'',
  ciudad:'',
  telefono:'',
  genero:'',
  rol:'',
  contrasena:'',
  estado:'activo',
  token:''
};
persona: any [] = [this.person];

registro: object ={
persona: this.persona
};
  constructor(private servicio: ServicioRegistro, private router : ActivatedRoute, private route: Router) {
    this.router.params.subscribe (parametros =>{
      console.log (parametros.id);
      this.person['id']= parametros.id;
     
      //this.registro["idadmin"]=parametros.id;
      this.traerPersona(parametros.id);
    })
   }

  ngOnInit() {
  }

  editar(){
    this.servicio.setUser(this.registro).subscribe(
      Response => {
        console.log("usuario editado");
        console.log("this.idsuperadmin");
        this.route.navigate(['superadministrador', this.idsuperadmin]);
      },error =>{
        console.log("persona no pudo ser editada")
         //mirar si el correo ya existe
         if (error.error.detalle === 'CORREO YA REGISTRADO'){
          this.correo = true;
         // console.log (this.correo);
        }
      });
  }

  traerPersona(id:any){
    this.servicio.getUserId(id).subscribe(
      Response =>{
        console.log("trayendo fdatos de la persona")
        console.log(Response.persona[0].nombre);
        this.person["rol"]=Response.persona[0].id;
        console.log("paso por aqui");
        this.id =Response.persona[0].idadmin;
        
        this.person["token"]= Response.persona[0].token;
        console.log(Response.persona[0].token);
        
      }, error => {
        console.log("no se pudieron traer los datos de la persona")
      })
  }
}
