import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
   page=1;
   pageSize=9;
  products:product[];

  getProduct(){
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    }, error => {
      
    });
  }





}
