import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; // Asegúrate de tener la interfaz User

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://localhost:8080/api/users/register';

  constructor(private http: HttpClient) {}

  registrarUsuario(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Asegurar JSON
    return this.http.post<User>(this.apiUrl, user, { headers });
  }
}