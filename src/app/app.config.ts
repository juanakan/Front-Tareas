import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';

const routes: Routes = [
  { path: '',component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: PaginaInicioComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // Necesario para hacer peticiones HTTP
    importProvidersFrom(FormsModule) // Necesario para usar [(ngModel)]
  ]
};
