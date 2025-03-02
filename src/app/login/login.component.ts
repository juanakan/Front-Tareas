import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

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
  errorMessage = ''; // Mensaje de error

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.errorMessage = '';
    const credentials = { username: this.username, password: this.password };

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        alert(response.username);
        if (response) {
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response));
          window.location.reload();
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

