import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

public message : string;
public personas:any = [];// = [this.person];

  constructor(private fb: FormBuilder, public servicio:ServicioRegistro) {
    this.listar();
   }

  ngOnInit() {
  }

  listar(){
    this.servicio.getUser().subscribe(
      Response =>{
        console.log(Response);

       
        this.personas = Response.persona;
        //this.message = "usuarios"
        console.log(this.personas)
      }, error =>{
        console.log(Response)
        this.message ="error"
      });
  }
}
