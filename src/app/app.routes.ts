import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent} from './components/footer/footer.component';

import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/listar/listar.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { SuperadministradorComponent } from './components/superadministrador/superadministrador.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RegistrarNegocioComponent } from './components/registrar-negocio/registrar-negocio.component';
import { ListarnegociospersonaComponent } from './components/listarnegociospersona/listarnegociospersona.component';
import { EditarnegocioComponent } from './components/editarnegocio/editarnegocio.component';
import { OfertaComponent} from './components/oferta/oferta.component';
import { RegistrarofertaComponent } from './components/registraroferta/registraroferta.component';
import { ListarnegociosadminComponent } from './components/listarnegociosadmin/listarnegociosadmin.component';
import { EditarpersonaComponent } from './components/editarpersona/editarpersona.component';
import { EditarofertaComponent } from './components/editaroferta/editaroferta.component';


const APP_ROUTES: Routes = [
    {path: 'editaroferta/:id', component : EditarofertaComponent},
    {path: 'editarpersona/:id', component : EditarpersonaComponent},
    {path: 'listarnegociosadmin',component: ListarnegociosadminComponent},
    {path: 'registraroferta/:id', component: RegistrarofertaComponent},
    {path: 'oferta/:id', component: OfertaComponent},
    {path: 'editarnegocio/:id', component: EditarnegocioComponent},
    {path: 'listarnegociopersona/:id', component: ListarnegociospersonaComponent},
    {path: 'registrarNegocio', component: RegistrarNegocioComponent},
    {path: 'usuario/:id', component: UsuarioComponent},
    {path: 'superadministrador/:id', component: SuperadministradorComponent},
    {path: 'administrador/:id', component: AdministradorComponent},
    {path: 'listar', component: ListarComponent},
    {path: 'inicio', component: AppComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrar', component: RegistrarComponent},
    
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);