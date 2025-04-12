import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl = 'http://localhost:8181/api/tasks/user/';
  private apiUrlRegister = 'http://localhost:8181/api/tasks/create'

  constructor(private http: HttpClient) { }

  obtenerTareas(idUser: number): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl+idUser);
  }

  registrarTarea(task: Task): Observable<Task> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<Task>(this.apiUrlRegister, task, { headers });
    }


}
