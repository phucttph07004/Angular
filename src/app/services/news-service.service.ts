import { Injectable } from '@angular/core';
import { news } from '../news';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(
    private http: HttpClient,
  ) { }


  News='https://5e7ae4130e0463001633261b.mockapi.io/news';

  getNew(): Observable<news[]>{
    return this.http.get<news[]>(this.News);
  
  }

  DetailNew(id): Observable<news>{
    return this.http.get<news>(`${this.News}/${id}`);
  }

  Delete(id){
    return this.http.delete<news>(`${this.News}/${id}`);
  }

  addNew(news){
    return this.http.post<news>( this.News, news );
  }


  EditNew(news): Observable<news>{
    return this.http.put<news>(`${this.News}/${news.id}`, news);
  }















}
