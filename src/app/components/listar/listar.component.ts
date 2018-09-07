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


//para hacer el delete personas
delete : object ={
  id:'',
  token:'1234'
};

persona: any[] = [this.delete];

deleteRequest : object = {
  persona: this.persona
};



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
        console.log("error listando todas las personas")
        this.message ="error"
      });
  }

  eliminar(idperson : any){
    this.persona[0].id = idperson;
    this.servicio.deleteUser(this.deleteRequest).subscribe(
      Response => {
        console.log("usuario eliminado");
        this.listar();
      }, error =>{
        console.log("no se pudo eliminar")
      });
  }

  
}
