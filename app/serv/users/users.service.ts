import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:5000/api/auth/signup';
  private updateUrl='http://localhost:5000/api/auth';
  private userslist= 'http://localhost:5000/api/auth';

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  createUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  getAllUsers() {
    console.log("all users ");
    return this.http.get<Users[]>(this.userslist);
  }

  deleteUser(userId: string): Observable<any> {

    return this.http.delete(`http://localhost:5000/api/auth/${userId}`);
  }
  
  oneUser(userId: string, firstname: string, lastname: string): Observable<any> {

    return this.http.get(`http://localhost:5000/api/auth/${userId}`);
  }
  
  getUserById(userId: string): Observable<any> {
    return this.http.get(`http://localhost:5000/api/auth/${userId}`);
  }
  
  
  updateUser(userId: string,  body:any): Observable<Users> {
    const url = `${this.updateUrl}/${userId}`;
    return this.http.patch<Users>(`http://localhost:5000/api/auth/${userId}`, body);
  }
  changePassword(userId: string, body: any): Observable<Users> {
    const url = `${this.updateUrl}/${userId}`;
    return this.http.patch<Users>(`http://localhost:5000/api/auth/${userId}`, body);
  }

  
  addCourseToStudent(studentId: string, courseId: string): Observable<any> {
    const url = `http://localhost:5000/api/auth/${studentId}/courses`; // Adjust the URL accordingly
// Fetch the student's current course list
return this.http.get(url).pipe(
  // switchMap((courses: any[]) => {
  //   // Check if the course is already in the student's list
  //   if (courses.some((course) => course.id === courseId)) {
  //     // Course already exists in the list, no need to add it again
  //     return of(null);
  //   } else {
  //     // Add the course to the student's list
  //     courses.push({ id: courseId });
  //     // Update the student's data with the updated course list
  //     return this.http.put(url, { courses });
  //   }
  // })
);
}


// deleteDiploma(userId: string): Observable<any> {

//   return this.http.delete(`http://localhost:5000/api/auth/${diplom}`);
// }
}