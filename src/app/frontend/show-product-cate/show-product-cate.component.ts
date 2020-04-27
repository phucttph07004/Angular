import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-product-cate',
  templateUrl: './show-product-cate.component.html',
  styleUrls: ['./show-product-cate.component.scss']
})
export class ShowProductCateComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }
  check:number;
  page=1;
  pageSize=100;
  products:product[];
  dd:product[];

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    });

    this.activatedRoute.params.subscribe(param => {
      this.check=param.id;
    });
  }

}
