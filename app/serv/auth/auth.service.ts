import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from './auth.model';
import { catchError, map } from 'rxjs';
// import { Router } from 'express';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth/login';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  currentUser: any;

  constructor(private http: HttpClient,
              private router: Router) { }
  
  createUser(data: any) {
    return this.http.post(this.apiUrl, data);
  }


  login(data: any) {
    // const data = { username, password };
    return this.http.post('http://localhost:5000/api/auth/login', data).pipe(
      map((res: any) => {
        console.log('logged in', res); 
      localStorage.setItem('currentUser', JSON.stringify(res));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        return res;
      }),
      catchError((error: any) => {
        console.error('login failed', error);
        throw error; // Rethrow the error to be handled by the subscriber
      })
    );
  }


  
  logout(refresh: any) {
    localStorage.clear();
    this.router.navigate(['/home']);
    console.log('logged out');
  }


  fetchData() {
      const access_token = localStorage.getItem('access_token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${access_token}`);
      return this.http.get<any>('/api/protected-data', { headers });
    }

}
