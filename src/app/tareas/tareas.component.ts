import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Task } from '../models/task.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

  tareas: Task[]=[];
  user: any= null;
  nuevaTarea: Task = { id: 0, titulo: '', description: '', completado: false, userId: 1 };
  
  constructor(private tareasService: TareasService){}
  ngOnInit() {
    const storedUser = localStorage.getItem('user');

  if (storedUser) {
    this.user = JSON.parse(storedUser);
  }
    this.tareasService.obtenerTareas(this.user.id).subscribe({
      next: (response: Task[]) => {
        this.tareas = response;
      },
      error: (error) => {
        console.error('Error obteniendo tareas:', error);
      }
    });
  }

  agregarTarea(){}
}
