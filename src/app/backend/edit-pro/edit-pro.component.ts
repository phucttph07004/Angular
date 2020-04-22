import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.scss']
})
export class EditProComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  Product : product;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.productService.DetailProduct(param.id).subscribe(data => 
       this.Product = data);
    });
  }

 SaveEditProduct(){
  this.productService.EditProduct(this.Product).subscribe(() => this.router.navigateByUrl('/admin'));
}
}
