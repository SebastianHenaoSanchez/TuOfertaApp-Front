import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
//firebase
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-registrar-negocio',
  templateUrl: './registrar-negocio.component.html',
  styleUrls: ['./registrar-negocio.component.css']
})
export class RegistrarNegocioComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

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
    latitud:'',
    longitud:''
};
negocio: any [] = [this.negoc];

registro: object ={
  negocio: this.negocio
};

  constructor(private afStorage: AngularFireStorage, private registrar: ServicioRegistro, private router : ActivatedRoute) {
    this.router.params.subscribe (parametros =>{
      this.id = parametros.id;
      this.negoc['idadmin']= parametros.id;
      console.log (this.id);
      //this.registro["idadmin"]=parametros.id;
      
    })
   }

  ngOnInit() {
  }


  crear(valor1 :any,valor2: any) {
    /* this.registro[0].idadmin=this.id; */
   // console.log (this.registro[0].idadmin);
   console.log(this.negocio[0].ubicacion);
    console.log(valor1);
    console.log(valor2);
    this.negocio[0].ubicacion= this.negocio[0].ubicacion +"/"+ valor1 +"/"+ valor2;
    this.negocio[0].latitud = valor1;
    this.negocio[0].longitud = valor2;

    this.registrar.postNegocio(this.registro).subscribe(
      Response =>{
        this.message="negocio creado"
        console.log(this.message)
    }, error => {
      this.message ="Error"
    });
}

upload(event) {
  const id = Math.random().toString(36).substring(2);
  this.ref = this.afStorage.ref(id);
  this.task = this.ref.put(event.target.files[0]);
  this.uploadProgress = this.task.percentageChanges();
  this.task.then(() => {
  this.ref.getDownloadURL().subscribe((url) => {
      console.log('Url: '+url)
      this.negoc['foto']= url;
    });

    
  });
}
}
