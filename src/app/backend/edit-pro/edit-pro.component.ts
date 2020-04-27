import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { category } from '../../category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.scss']
})
export class EditProComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private cateService:CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  Product : product;
  Category:category[];
  Cate_pro:category;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.productService.DetailProduct(param.id).subscribe(data => {
       this.Product = data;

       this.cateService.DetailCate(data.cate_id).subscribe(data => {
        this.Cate_pro = data});
      });
    });


    this.getAllCate();
  }



 SaveEditProduct(){
  this.productService.EditProduct(this.Product).subscribe(() => this.router.navigateByUrl('/admin'));
}


getAllCate(){
  this.cateService.getCate().subscribe(data => {
    this.Category = data;});
}






}
