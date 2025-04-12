import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateTareaComponent } from './create-tarea/create-tarea.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'modificar', component:UpdateUserComponent},
    {path:'inicio', component:PaginaInicioComponent},
    { path: 'nuevaTarea', component:CreateTareaComponent}
];
