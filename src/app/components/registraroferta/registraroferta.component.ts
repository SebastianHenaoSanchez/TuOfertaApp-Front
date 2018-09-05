import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ServicioRegistro } from '../../service/servicio.registro';
//firebase
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
//para ir a otros componentes
import { Routes, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-registraroferta',
  templateUrl: './registraroferta.component.html',
  styleUrls: ['./registraroferta.component.css']
})
export class RegistrarofertaComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

  separador = "/";
  limite = 3;
  negocio: any [] = [];
  arregloDeSubCadenas: any [] = [] ;
  respuestanegocio : any;

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
    latitud:'',
    longitud:''
};
oferta: any [] = [this.ofer];

registro : object = {
  oferta: this.oferta
}


  constructor(private afStorage: AngularFireStorage, private navegar: Router, private router: ActivatedRoute, private registrar: ServicioRegistro) {
    

    this.router.params.subscribe (parametros =>{
      this.idnegocio = parametros.id;
      this.ofer['idnegocio']= parametros.id;
      //this.registro["idadmin"]=parametros.id;
     
    })
    this.coordenadas();
   }


  ngOnInit() {
  }

  coordenadas (){
   this.registrar.getNegocio(this.idnegocio).subscribe(
     Response => {
       this.respuestanegocio = Response.negocio[0];
       console.log("en coordenadas");

      this.arregloDeSubCadenas = this.respuestanegocio.ubicacion.split(this.separador, this.limite);
      this.oferta[0].latitud = this.arregloDeSubCadenas[1];
      this.oferta[0].longitud = this.arregloDeSubCadenas[2];
      
     }, error => {
       this.message = "no me trajo las coordenadas"
     }
   )
   
  }

  crearOferta(){
   // this.coordenadas();
    
    console.log("registro");
    console.log(this.registro);
    this.registrar.postOfertas(this.registro).subscribe(
      Response =>{
        this.message = "Oferta Creada"
        console.log(this.message)

        this.navegar.navigate(['oferta', this.idnegocio]);
      }, error => {
        this.message = "No se pudó registrar"
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
        this.ofer['foto']= url;
      });

      
    });
  }

  search (){
    this.registrar.getNegocio(this.idnegocio).subscribe(
      Response =>{
        this.negocio = Response.negocio;
        
      }
    )
  }

}
