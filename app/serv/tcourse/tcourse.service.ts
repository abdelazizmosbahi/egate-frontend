import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class TcourseService {
  private apiUrl = 'http://localhost:5000/api/course';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // teacher: any;

  constructor(private http: HttpClient) { }

  addcourse(course: any) {
    return this.http.post(this.apiUrl, course);
  }
  
  getAllCourses() {
    return this.http.get<Course[]>(this.apiUrl);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/course/${courseId}`);
  }
  
  getCourseById(courseId: string): Observable<any> {
    return this.http.get(`http://localhost:5000/api/course/${courseId}`);
  }

  getCourseByCategory(_id: string): Observable<any> {
    return this.http.get(`http://localhost:5000/api/course/?category=${_id}`);
  }
  getCourseByTeacher(_id: string): Observable<any> {
    return this.http.get(`http://localhost:5000/api/course/?category=${_id}`);
  }
  getUserById(userId: string): Observable<any> {
    return this.http.get(`http://localhost:5000/api/auth/${userId}`);
  }
  updateCourse(courseId: string,  body:any): Observable<Course> {
    const url = `${this.apiUrl}/${courseId}`;
    return this.http.put<Course>(`http://localhost:5000/api/course/${courseId}`, body);
  }

  
  // enroll(courseId: string): Observable<any> {
  //   return this.http.get(`http://localhost:5000/api/course/${courseId}`);
  // }

  // teach(data: any) {
  //   return this.http.post(data).pipe(
  //     map((res: any) => {
  //       console.log('teacher info', res); 
  //     localStorage.setItem('teacher', JSON.stringify(res));
  //     this.teacher = JSON.parse(localStorage.getItem('teacher') || '{}');


  //       return res;
  //     })
  //   );
  // }
}
