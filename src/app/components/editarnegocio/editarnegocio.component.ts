import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import {ActivatedRoute} from '@angular/router'
import { Routes, Router } from '../../../../node_modules/@angular/router';

//firebase
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-editarnegocio',
  templateUrl: './editarnegocio.component.html',
  styleUrls: ['./editarnegocio.component.css']
})
export class EditarnegocioComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

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
    latitud:'',
    longitud:''
};
negocio: any [] = [this.negoc];

registro: object ={
  negocio: this.negocio
};

  constructor(private afStorage: AngularFireStorage, private get: ServicioRegistro, private edit: ServicioRegistro, private router : ActivatedRoute, private route: Router) {
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


  editar(valor1 : any, valor2:any){
    console.log(this.registro);
    console.log(this.negocio[0].ubicacion);
    console.log(valor1);
    console.log(valor2);
    this.negocio[0].ubicacion= this.negocio[0].ubicacion +"/"+ valor1 +"/"+ valor2;
    this.negocio[0].latitud = valor1;
    this.negocio[0].longitud = valor2;

    this.edit.postNegocio(this.registro).subscribe(
      Response => {
        this.message ="negocio editado";
        console.log(this.message);
       // this.route.navigate(['administrador', this.idadmin]);
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
      })
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
