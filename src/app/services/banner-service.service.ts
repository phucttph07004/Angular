import { Injectable } from '@angular/core';
import { banner } from '../banner';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerServiceService {

  constructor(
    private http: HttpClient,
  ) { }


  banners='https://5e7ae4130e0463001633261b.mockapi.io/banner';

  getBanners(): Observable<banner[]>{
    return this.http.get<banner[]>(this.banners);
  
  }

  DetailBanner(id): Observable<banner>{
    return this.http.get<banner>(`${this.banners}/${id}`);
  }

  Delete(id){
    return this.http.delete<banner>(`${this.banners}/${id}`);
  }

  addBanner(banner){
    return this.http.post<banner>( this.banners, banner );
  }


  EditBanner(banner): Observable<banner>{
    return this.http.put<banner>(`${this.banners}/${banner.id}`, banner);
  }







}


