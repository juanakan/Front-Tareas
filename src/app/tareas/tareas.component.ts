import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Task } from '../models/task.model';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [NgFor, FormsModule, NgClass, RouterModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

  tareas: Task[]=[];
  user: any= null;
  nuevaTarea: Task = { id: 0, titulo: '', description: '', userId: 1, prioridad: 0};
  
  constructor(private router: Router, private tareasService: TareasService){}
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
  getPriorityClass(prioridad: number): string {
    return {
      2: 'shadow-danger',
      1: 'shadow-warning',
      0: 'shadow-success'
    }[prioridad] || '';
  }
  
  agregarTarea(){
    this.router.navigate(['/nuevaTarea']);
  }

  modificarTarea(tarea: Task){
    alert("modificar tarea: "+tarea.id+" "+tarea.titulo+" "+tarea.description+" "+tarea.prioridad+" "+tarea.userId);
  }

  eliminarTarea(idTarea: number){
    alert("borrarTarea con id: "+idTarea);
  }


}
