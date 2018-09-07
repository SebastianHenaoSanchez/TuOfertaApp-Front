import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';


@Component({
  selector: 'app-listarofertasadmin',
  templateUrl: './listarofertasadmin.component.html',
  styleUrls: ['./listarofertasadmin.component.css']
})
export class ListarofertasadminComponent implements OnInit {

  public ofertas:any = [];
  public message: any = "";

  constructor(private deleteofer: ServicioRegistro, private listar: ServicioRegistro) {
    this.listarOfertas();
   }

  ngOnInit() {
  }

  listarOfertas(){
    this.listar.getOfer().subscribe(
      Response => {
        this.ofertas = Response.oferta;
      }, error =>{
        console.log("error listando todas las ofertas")
      });
  }

  eliminar(idoferta : any){
    this.deleteofer.deleteOferta(idoferta).subscribe(
    Response => {
      console.log("oferta eliminada")
      this.listarOfertas();
  }, error => {
    console.log("no se pudo eliminar")
  })
  }
}
