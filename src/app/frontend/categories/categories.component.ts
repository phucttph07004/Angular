import { Component, OnInit } from '@angular/core';
import { category } from '../../category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private categoryService:CategoryService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCate();
  }
  category:category[];
  getCate(){
    this.categoryService.getCate().subscribe(data => {
      this.category = data;
    }, error => {
      
    });
  }


}
