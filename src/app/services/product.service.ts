import { Injectable } from '@angular/core';
import { product } from '../product';
import { data } from '../FakeProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products=data;

  getProduct(){
    return this.products;
  }

  DetailProduct(id){
    return this.products.filter(x => x.id == id);
  }


  Delete(id){
    return this.products=this.products.filter(x => x.id != id);

  }
















}
