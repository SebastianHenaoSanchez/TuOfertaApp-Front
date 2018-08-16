import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ServicioRegistro } from '../../service/servicio.registro';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  public form: FormGroup;
  public message ="";
  

  person: object = {
        correo:'',
        nombre:'',
        apellidos:'',
        telefono:'',
        genero:'',
        rol:'',
        contrasena:'',
        estado:'activo',
        token:''
  };
  persona: any [] = [this.person];

  registro: object ={
    persona: this.persona
  };

  constructor(private registrar: ServicioRegistro) { 
    console.log (this.registro);
    
  }

  ngOnInit() {
    
    
  }

  crear() {
    console.log (this.registro)
    this.registrar.postUser(this.registro).subscribe(
      Response =>{
        this.message="usuario creado"
        console.log(this.message)
    }, error => {
      this.message ="Error"
    });
  }

//  createForm() {
//    //este formulario va a ser tipo formgroup pero con un json
//    this.form = this.fb.group({  
//      persona : this.fb.group([{
//        id : [''],
//        correo:['',Validators.required],
//        nombre:['',Validators.required],
//        apellidos:['',Validators.required],
//        telefono:['',Validators.required],
//        genero:['',Validators.required],
//        rol:['',Validators.required],
//        contrasena:['',Validators.required],
//        estado:['Activo'],
//        token:['']
//      }]) 
        
      
  
      
//    })

//  }

}
