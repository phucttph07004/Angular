import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  Product:product;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.productService.DetailProduct(param.id).subscribe(data => 
       this.Product = data);
    });
  }





}
