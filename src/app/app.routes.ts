import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent} from './components/footer/footer.component';

import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AppComponent } from './app.component';



const APP_ROUTES: Routes = [
    {path: 'inicio', component: AppComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrar', component: RegistrarComponent},
    
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);