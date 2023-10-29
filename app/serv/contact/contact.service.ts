import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:5000/api/appointment';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }



  addcontact(contact: any) {
    return this.http.post(this.apiUrl, contact);
  }
  
  getAllContacts() {
    return this.http.get<Contact[]>(this.apiUrl);
  }
}

