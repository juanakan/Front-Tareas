import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Task } from '../models/task.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

  tareas: Task[]=[];
  constructor(private tareasService: TareasService){}
  ngOnInit() {
    this.tareasService.obtenerTareas().subscribe({
      next: (response: Task[]) => {
        this.tareas = response;
      },
      error: (error) => {
        console.error('Error obteniendo tareas:', error);
      }
    });
  }
}
