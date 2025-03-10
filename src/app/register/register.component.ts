import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';
import { UsuariosService } from '../services/usuarios.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nuevoUsuario: User = { id: 0, username: '', password: '', email: ''};
  errorMessage = '';
  usernameEmpty = false;
  passwordEmpty = false;
  emailEmpty = false;
  emailIncorrect = false;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  userNameError='El nombre de usuario es obligatorio.';
  passwordError='La contraseña es obligatoria.';
  emailError='El email es obligatorio.';
  emailInvalid='El email tiene que tener formato valido';
  

  constructor(private usuariosService: UsuariosService, private router: Router) {
  }
  onSubmit() {
    this.usernameEmpty = !this.nuevoUsuario.username;
    this.passwordEmpty = !this.nuevoUsuario.password;
    this.emailEmpty = !this.nuevoUsuario.email;
    if(!this.emailEmpty){
      this.emailIncorrect = !this.emailPattern.test(this.nuevoUsuario.email);
    }
    if (this.usernameEmpty || this.passwordEmpty || this.emailEmpty || this.emailIncorrect) {
      return;
    }
    this.errorMessage = '';
    this.usuariosService.registrarUsuario(this.nuevoUsuario).subscribe({
      next: (response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/inicio']);
        } else {
          this.errorMessage = 'Error en el alta';
        }
      },
      error: (error) => {
        if (error.status === 409) {
          this.errorMessage = 'El usuario ya existe, elige otro nombre';
        } else {
          this.errorMessage = 'Error al dar de alta el usuario';
        }
      }
    });
  }
  
}

