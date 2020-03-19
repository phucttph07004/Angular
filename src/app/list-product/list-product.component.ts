import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  products:product[];

  getProduct(){
    this.products = this.productService.getProduct();
  }

  Detail_Product:product[];
  DetailProduct(id){
    this.Detail_Product = this.productService.DetailProduct(id);
  }

  Delete(id){
    this.products = this.productService.Delete(id);
  }







}
