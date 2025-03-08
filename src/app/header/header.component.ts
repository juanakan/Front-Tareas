import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: any= null;

  constructor(private router: Router) {
    this.loadUser();
  }
  loadUser() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);

    }
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('user');
    this.user = null;
    window.location.reload();
  }
}

