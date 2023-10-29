import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login.model';
import * as bcrypt from 'bcrypt';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth/login';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(body:string) {
    // const data = { username, password };
    return this.http.post(this.apiUrl, body);
  }
  // fetchData() {
  //   const access_token = localStorage.getItem('access_token');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${access_token}`);

  //   return this.http.get<any>('/api/protected-data', { headers });
  // }
}