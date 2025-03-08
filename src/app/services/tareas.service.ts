import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl = 'http://localhost:8181/api/tasks/';

  constructor(private http: HttpClient) { }

  obtenerTareas(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
