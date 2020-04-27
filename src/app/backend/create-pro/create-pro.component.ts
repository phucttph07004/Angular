import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { category } from '../../category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-pro',
  templateUrl: './create-pro.component.html',
  styleUrls: ['./create-pro.component.scss']
})
export class CreateProComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private cateService:CategoryService,
    private Router: Router,
  ) { }
  Category:category[];
  Product:product=new product()
  ngOnInit(): void {
    this.cateService.getCate().subscribe(data => {
      this.Category = data;});
  }

  addProduct(){
    this.productService.addProduct(this.Product).subscribe(() => this.Router.navigateByUrl('/admin'));
  }

}
