import { Component, OnInit } from '@angular/core';
import { ServicioRegistro } from '../../service/servicio.registro';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Routes, Router } from '../../../../node_modules/@angular/router';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public message: any;
  
 public contrasena: boolean;
 public correo: boolean; 
  //creamos una persona para guardar el login de google
  person: object = {
    id: '',
    correo:'',
    nombre:'',
    apellidos:'na',
    telefono:'na',
    genero:'na',
    rol:'usuario',
    contrasena:'na',
    estado:'activo',
    token:'12'
};
persona: any [] = [this.person];

registro: object ={
persona: this.persona
};

  constructor(private socialAuthService: AuthService, private route: Router, private fb: FormBuilder, private login:ServicioRegistro, private registrar: ServicioRegistro) { 
    this.createform()
  }

  ngOnInit() {
     /* setInterval(()=>{
      console.log(this.form)
    },15000)  */
  }

  loggear(){
    this.login.login(this.form.value).subscribe(
      Response =>{
        console.log(Response)
        console.log(Response.persona[0].rol)
        
        if(Response.persona[0].rol === "administrador"){
          this.route.navigate(['administrador', Response.persona[0].id]);

        }else if(Response.persona[0].rol === "super administrador"){
          this.route.navigate(['superadministrador', Response.persona[0].id]);
        }else {
          this.route.navigate(['usuario', Response.persona[0].id]);
        } 
      }, error => {
        this.message = error.error.detalle;
        console.log(this.message)
        //mirar si el correo o contraseña son correctos
        if (this.message === 'correo no existe'){
          this.correo = true;
         // console.log (this.correo);
        } else if (this.message === 'contraseña incorrecta'){
          this.contrasena = true;
         // console.log (this.contrasena);
        }
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
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
     if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if (socialPlatform == "google"){
      console.log("entro al login de google")
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        this.person['nombre'] = userData.name;
        this.person['id'] = userData.id;
        this.person ['correo'] = userData.email;
        this.crearUser();
        // como se loggea con google lo llevamos a la ventana de usuario
        
            
      }
    );
  }

  crearUser() {
    console.log (this.registro)
    this.registrar.postUser(this.registro).subscribe(
      Response =>{
        this.message="usuario creado"
        console.log(this.message)
        this.route.navigate (['usuario',Response.id]);
    }, error => {
      this.message ="Error"
    });
  }
  
}
