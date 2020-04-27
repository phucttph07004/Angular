import { Injectable } from '@angular/core';
import { category } from '../category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
  ) { }


  
  categories='https://5e7ae4130e0463001633261b.mockapi.io/categories';

  getCate(): Observable<category[]>{
    return this.http.get<category[]>(this.categories);
  
  }

  DetailCate(id): Observable<category>{
    return this.http.get<category>(`${this.categories}/${id}`);
  }

  Delete(id){
    return this.http.delete<category>(`${this.categories}/${id}`);
  }

  addCate(category){
    return this.http.post<category>( this.categories, category );
  }


  EditCate(category): Observable<category>{
    return this.http.put<category>(`${this.categories}/${category.id}`, category);
  }


}
