// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:5000/api/users'; // NestJS API URL

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUser(id: number) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  createUser(user: any) {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  updateUser(user: any) {
    return this.http.put(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}
