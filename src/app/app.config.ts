import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '',component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {path:'register', component:RegisterComponent},
  { path: 'inicio', component: PaginaInicioComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), 
    importProvidersFrom(FormsModule)
  ]
};
