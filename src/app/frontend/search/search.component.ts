import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  search:product[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.productService.getProduct().subscribe(data => {
          this.search=data.filter(x => x.name ==param.search);
      });
    });

  }










}
