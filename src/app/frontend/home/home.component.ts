import { Component, OnInit } from '@angular/core';
import { product } from '../../product';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private productService:ProductServiceService,
    private activatedRoute: ActivatedRoute,
  ) {}
  public model: any;
  productName = [];
  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      data.map(x =>{
        this.productName.push(x.name);
      });
    });
 }
      search = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 2 ? []
          : this.productName.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
      );
   

}
