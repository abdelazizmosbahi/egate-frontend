import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Appointment } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = 'http://localhost:5000/api/appointment';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  addAppointment(appointment: any) {
    return this.http.post(this.apiUrl, appointment);
  }
  
  getAllAppointments() {
    return this.http.get<Appointment[]>(this.apiUrl);
  }

  deleteAppointment(appointmentId: string): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/appointment/${appointmentId}`);
  }
  
  // updateApp(appointment: Appointment): Observable<App> {
  //   const url = `${this.apiUrl}/${appointment._id}`;
  //   return this.http.put<Appointment>(url, appointment, this.httpOptions);
  // }
  
}
