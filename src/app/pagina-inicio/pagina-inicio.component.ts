import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { TareasComponent } from "../tareas/tareas.component";

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [HeaderComponent, TareasComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

  isLoggedIn = false;

   constructor(private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('user');
    }

}
