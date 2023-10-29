import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:5000/api/category';
  private searchUrl = 'http://localhost:5000/api/category/search?='; // Replace with your actual API URL

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  addcategory(category: any) {
    return this.http.post(this.apiUrl, category);
  }
  
  getAllCategories() {
    return this.http.get<Category[]>(this.apiUrl);
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/category/${categoryId}`);
  }
  

  getCategoryById(categoryId: string): Observable<any> {
    return this.http.get(`http://localhost:5000/api/category/${categoryId}`);
  }
  
  updateCategory(categoryId: string,  body:any): Observable<Category> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.put<Category>(`http://localhost:5000/api/category/${categoryId}`, body);
  }
  search(category_title: string): Observable<Category> {
    const url = `${this.searchUrl}`;
    return this.http.post<Category>(url, { category_title: category_title });
  }



  // @Post('/search')
  // Search(@Query('key') key){
  //     return this.service.Search(key);
  // }
}
