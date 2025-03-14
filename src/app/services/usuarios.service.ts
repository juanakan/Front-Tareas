import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; // Asegúrate de tener la interfaz User
import { UserUpdate } from '../models/userUpdate.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrlRegister = 'http://localhost:8080/api/users/register';
  private apiUrlModify = 'http://localhost:8080/api/users/modify/';

  constructor(private http: HttpClient) {}

  registrarUsuario(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(this.apiUrlRegister, user, { headers });
  }

  modificarUsuario(userUpdade: UserUpdate, id: number): Observable<UserUpdate> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<UserUpdate>(this.apiUrlModify+id, userUpdade, { headers });
  }
}