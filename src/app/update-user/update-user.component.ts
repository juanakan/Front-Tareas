import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { UserUpdate } from '../models/userUpdate.model';
import { UsuariosService } from '../services/usuarios.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FormsModule, NgIf],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  errorMessage='';
  username = '';
  id = 0;
  user: any= null;
  isLoggedIn = false;
  modificarUsuario: UserUpdate = { currentPassword: '', newPassword: '', email: ''};

  constructor(private router: Router, private usuariosService: UsuariosService) {}
  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    
    
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.id = this.user.id;
      this.username = this.user.username;
    }
  }

  
  onSubmit() {
    this.usuariosService.modificarUsuario(this.modificarUsuario, this.id).subscribe({
      next: (response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/inicio']);
        }
      },
      error: (error) => {
        if (error.status === 401) {
          this.errorMessage = 'La contraseña actual no es válida';
        } else {
          this.errorMessage = error.error || 'Error al modificar el usuario';
        }
      }
    });
  }

}
