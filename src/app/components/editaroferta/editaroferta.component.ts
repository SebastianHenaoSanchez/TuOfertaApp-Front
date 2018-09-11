import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import {ActivatedRoute} from '@angular/router'
import { Routes, Router } from '../../../../node_modules/@angular/router';

//firebase
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';


@Component({
  selector: 'app-editaroferta',
  templateUrl: './editaroferta.component.html',
  styleUrls: ['./editaroferta.component.css']
})
export class EditarofertaComponent implements OnInit {
  public message ="";
  public idoferta: any;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  separador = "/";
  limite = 3;
  arregloDeSubCadenas: any [] = [] ;
  respuestanegocio : any;
  idnegocio : any;

  ofer: object = {
    idnegocio: '',
    idoferta: '',
    producto:'',
    detalle:'',
    valor:'',
    descuento:'',
    foto:'',
    fechainicio:'',
    fechafin:'',
    tipooferta:'',
    latitud:'',
    longitud:''
};
oferta: any [] = [this.ofer];

registro : object = {
  oferta: this.oferta
}


  constructor(private afStorage: AngularFireStorage, 
    private navegar: Router, 
    private router: ActivatedRoute, 
    private registrar: ServicioRegistro) { 
       this.router.params.subscribe (parametros =>{
          this.idoferta = parametros.id;
          this.ofer['idoferta'] = parametros.id;
       })
       this.coordenadas();
     }

  ngOnInit() {
  }

  coordenadas (){
    this.registrar.getOfertas(this.idoferta).subscribe(
      Response => {
        this.registrar.getNegocio(Response.oferta[0].idnegocio).subscribe(
        
          Oferta =>{
            this.idnegocio= Response.oferta[0].idnegocio;
            this.ofer['idnegocio'] = this.idnegocio; 
            this.respuestanegocio = Oferta.negocio[0];
            console.log("en coordenadas");

            this.arregloDeSubCadenas = this.respuestanegocio.ubicacion.split(this.separador, this.limite);
            this.oferta[0].latitud = this.arregloDeSubCadenas[1];
            this.oferta[0].longitud = this.arregloDeSubCadenas[2];
          }, error => {
            console.log("no me hizo lo de las coordenadas")
          }
        )}
    )}

  EditarOferta(){
    this.registrar.postOfertas(this.registro).subscribe(
      Response =>{
        console.log("oferta editada");
        this.navegar.navigate(['oferta',this.idnegocio ]);
      }, error => {
        console.log("error editando oferta")
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
        this.ofer['foto']= url;
      });

      
    });
  }
}
