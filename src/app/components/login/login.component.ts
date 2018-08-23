import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Routes, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public message ="";


  constructor(private route: Router, private fb: FormBuilder, private login:ServicioRegistro) { 
    this.createform()
  }

  ngOnInit() {
     setInterval(()=>{
      console.log(this.form)
    },15000) 
  }

  loggear(){
    this.login.login(this.form.value).subscribe(
      Response =>{
        console.log(Response)
        console.log(Response.persona[0].rol)
        this.message = "loggeado exitosamente"
        if(Response.persona[0].rol === "administrador"){
          this.route.navigate(['administrador', Response.persona[0].id]);

        }else if(Response.persona[0].rol === "super administrador"){
          this.route.navigate(['superadministrador', Response.persona[0].id]);
        }else {
          this.route.navigate(['usuario', Response.persona[0].id]);
        } 

      }, error => {
        this.message ="Error en login"

      });
      
  }

  createform(){
    this.form = this.fb.group({
      correo:['',Validators.compose([
        Validators.required
      ])],

      contrasena:['',Validators.required]
    })

  }
}
