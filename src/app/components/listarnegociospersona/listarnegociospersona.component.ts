import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-listarnegociospersona',
  templateUrl: './listarnegociospersona.component.html',
  styleUrls: ['./listarnegociospersona.component.css']
})
export class ListarnegociospersonaComponent implements OnInit {
  id : any;
  public negocios:any = [];

  constructor(private router : ActivatedRoute, private traerNegocio:ServicioRegistro) {
    this.router.params.subscribe (parametros =>{
      this.id = parametros.id;
      console.log(parametros);

      this.traerNegocios()
    })
   }
  

  ngOnInit() {
  }

  traerNegocios (){
    this.traerNegocio.getNegocioPersona(this.id).subscribe(
      Response => {
        console.log("datos negocios")
       
        this.negocios = Response.negocio;
        console.log(this.negocios)
      }, error => {
        console.log ("Error listando negocios")
      });
  }
}
