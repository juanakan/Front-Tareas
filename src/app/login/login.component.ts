import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  isLoggedIn = false;
  isUpdate = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('user');
    const modificarUsuario = localStorage.getItem('modificarUsuario');

    if(this.isLoggedIn && modificarUsuario==='false'){
      this.router.navigate(['/inicio']);
    }else if (this.isLoggedIn && modificarUsuario==='true'){
      localStorage.setItem('modificarUsuario', 'false');
      this.router.navigate(['/modificar']);
    }
  }

  onSubmit() {
    this.errorMessage = '';
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
          this.isLoggedIn = true;
          this.router.navigate(['/inicio']);

        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      error: () => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    });
  }

  irARegistro(){
    this.router.navigate(['/register']);
    }
}
