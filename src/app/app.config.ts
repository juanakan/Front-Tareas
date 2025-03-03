import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tareas', component: TareasComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // Necesario para hacer peticiones HTTP
    importProvidersFrom(FormsModule) // Necesario para usar [(ngModel)]
  ]
};
