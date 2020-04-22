import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListproductComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  page=1;
   pageSize=9;
  ngOnInit(): void {
    this.getProduct();
  }

  products:product[];

  getProduct(){
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    }, error => {
      
    });
  }

  Delete(id){
    this.productService.Delete(id).subscribe(()=>{
      return this.getProduct();
    });
  }


}
