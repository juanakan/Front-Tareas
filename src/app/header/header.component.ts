import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: any = null;

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

  login() {
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/login']);
    window.location.reload();
  }
}

