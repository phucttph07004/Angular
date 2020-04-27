import { Injectable } from '@angular/core';
import { product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  
  products='https://5e7ae4130e0463001633261b.mockapi.io/products';

  getProduct(): Observable<product[]>{
    return this.http.get<product[]>(this.products);
  
  }

  DetailProduct(id): Observable<product>{
    return this.http.get<product>(`${this.products}/${id}`);
  }

  Delete(id){
    return this.http.delete<product>(`${this.products}/${id}`);
  }

  addProduct(product){
    return this.http.post<product>( this.products, product );
  }


  EditProduct(product): Observable<product>{
    return this.http.put<product>(`${this.products}/${product.id}`, product);
  }





}
