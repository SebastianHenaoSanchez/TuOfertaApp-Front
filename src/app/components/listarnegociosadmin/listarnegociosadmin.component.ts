import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';

@Component({
  selector: 'app-listarnegociosadmin',
  templateUrl: './listarnegociosadmin.component.html',
  styleUrls: ['./listarnegociosadmin.component.css']
})
export class ListarnegociosadminComponent implements OnInit {

  public negocios:any = [];

  constructor(private listar : ServicioRegistro, private deleteNegocio: ServicioRegistro) {
    this.listarnegocios();
   }

  ngOnInit() {
  }

  listarnegocios(){
    this.listar.getNegocios().subscribe(
      Response =>{
        this.negocios = Response.negocio;
      }, error => {
        console.log("error listando todos los negocios");
      });
  }

  eliminarNegocio (idnego : any){
    console.log(idnego);
    this.deleteNegocio.deleteNegocio(idnego).subscribe(
      Response => {
        console.log("negocio eliminado")
        this.listarnegocios();
      }, error =>{
        console.log ("no se pudo eliminar")
      })
  }
}
