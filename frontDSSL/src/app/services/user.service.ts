import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //se define el url aqui
  private apiURL = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) { }

  //este es el servicio para llamar Usuarios
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiURL);
  }

}
