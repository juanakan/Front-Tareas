import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Task } from '../models/task.model';
import { TareasService } from '../services/tareas.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-create-tarea',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FormsModule, NgIf],
  templateUrl: './create-tarea.component.html',
  styleUrl: './create-tarea.component.css'
})
export class CreateTareaComponent {

  nuevaTarea: Task = {id: 0, titulo: '', description: '', prioridad: 0, userId: 0,}
  errorMessage = '';
  titleEmpty = false;
  descripcionEmpty = false;
  titleError = 'El titulo es obligatorio';
  descripcionError = 'La descripción es obligatoria';
  user: any = null;

  constructor(private tareasService: TareasService, private router: Router){}
  onSubmit(){
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    this.nuevaTarea.userId = this.user.id;

    this.titleEmpty = !this.nuevaTarea.titulo;
    this.descripcionEmpty = !this.nuevaTarea.description;

    if(this.titleEmpty || this.descripcionEmpty){
      return;
    }
    this.errorMessage = '';
    this.tareasService.registrarTarea(this.nuevaTarea).subscribe({
      next: (response) =>{
        if(response){
          this.router.navigate(['/inicio']);
        }else{
          this.errorMessage = 'Error en el alta';
        }
      }
    });
  }
}
