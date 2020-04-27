import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { category } from '../../category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detail-pro',
  templateUrl: './detail-pro.component.html',
  styleUrls: ['./detail-pro.component.scss']
})
export class DetailProComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private cateService:CategoryService,
    private activatedRoute: ActivatedRoute,
  ) { }
  Product:product;
  Category:category;


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(param => {
      this.productService.DetailProduct(param.id).subscribe(data => {
       this.Product = data;

       this.cateService.DetailCate(data.cate_id).subscribe(data => {
        this.Category = data});
      });
    });

  }
 
  


  
}
