import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//se agrego esto para usar el ngmodel en el html y tambien se debe importar abajo en imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

import { ServicioRegistro } from './service/servicio.registro';
import { ListarComponent } from './components/listar/listar.component';

import { AdministradorComponent } from './components/administrador/administrador.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SuperadministradorComponent } from './components/superadministrador/superadministrador.component';
import { RegistrarNegocioComponent } from './components/registrar-negocio/registrar-negocio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListarnegociospersonaComponent } from './components/listarnegociospersona/listarnegociospersona.component';
import { EditarnegocioComponent } from './components/editarnegocio/editarnegocio.component';
import { OfertaComponent } from './components/oferta/oferta.component';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment} from '../environments/environment';
//google maps
import { AgmCoreModule } from '@agm/core';


//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

//login con google
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import { Observable } from 'rxjs/Observable';
import { RegistrarofertaComponent } from './components/registraroferta/registraroferta.component';
import { ListarnegociosadminComponent } from './components/listarnegociosadmin/listarnegociosadmin.component';
import { ListarofertasadminComponent } from './components/listarofertasadmin/listarofertasadmin.component';
import { EditarpersonaComponent } from './components/editarpersona/editarpersona.component';


// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
         {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('231572004369471')
        }, 
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('695284588998-jdsf9c1mb7pd3cj8457rcml5m8c5jrt2.apps.googleusercontent.com')
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegistrarComponent,
    ListarComponent,
    AdministradorComponent,
    UsuarioComponent,
    SuperadministradorComponent,
    RegistrarNegocioComponent,
    PerfilComponent,
    ListarnegociospersonaComponent,
    EditarnegocioComponent,
    OfertaComponent,
    RegistrarofertaComponent,
    ListarnegociosadminComponent,
    ListarofertasadminComponent,
    EditarpersonaComponent,
   
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatBottomSheetModule,
    AngularFireModule.initializeApp(environment.firebase),  
    AngularFireStorageModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
      })                        
  ],
  //para el bottom sheet
  entryComponents: [
    OfertaComponent
  ],
  providers: [
    ServicioRegistro,

  {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
