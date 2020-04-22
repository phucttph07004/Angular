import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-pro',
  templateUrl: './create-pro.component.html',
  styleUrls: ['./create-pro.component.scss']
})
export class CreateProComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private Router: Router,
  ) { }

  Product:product=new product()
  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct(this.Product).subscribe(() => this.Router.navigateByUrl('/admin'));
  }

}
