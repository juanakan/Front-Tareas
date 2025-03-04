import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('user');
  }

  onSubmit() {
    this.errorMessage = '';
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
          this.isLoggedIn = true;
          this.router.navigate(['/tareas']);

        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      error: () => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
