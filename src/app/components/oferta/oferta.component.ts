import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';

//para mandar id por url
import {ActivatedRoute} from '@angular/router'
// para ir a otros componentes
import { Routes, Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  id : any;
  public ofertas:any = []
  public message: any;


  constructor(private deleteofer: ServicioRegistro, private router : ActivatedRoute,private traerOfertas: ServicioRegistro, private navegar: Router) {
    this.router.params.subscribe (parametros =>{
      this.id = parametros.id;
      console.log(parametros);

      this.listarOfertas(parametros.id);
    })
   }

  ngOnInit() {
  }
  listarOfertas(idnego: any){
    
    this.traerOfertas.getOfertasNegocio(idnego).subscribe(
      Response =>{
        console.log("entro a listar las ofertas de un negocio")
        console.log(Response);

       
        this.ofertas = Response.oferta;
        console.log(this.ofertas)
      }, error =>{
        // console.log(Response)
        this.message ="error en listar ofertas negocio"
        console.log(this.message);
      });
  }

  registrar(){
    this.navegar.navigate(['registraroferta',this.id]);
  }

  eliminar(idoferta : any){
    this.deleteofer.deleteOferta(idoferta).subscribe(
    Response => {
      console.log("oferta eliminada")
      this.listarOfertas(this.id);
  }, error => {
    console.log("no se pudo eliminar")
  })
  }
}
