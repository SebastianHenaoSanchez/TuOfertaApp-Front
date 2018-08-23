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



const APP_ROUTES: Routes = [
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