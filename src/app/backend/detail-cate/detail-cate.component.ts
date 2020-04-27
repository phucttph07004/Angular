import { Component, OnInit } from '@angular/core';
import { category } from '../../category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-cate',
  templateUrl: './detail-cate.component.html',
  styleUrls: ['./detail-cate.component.scss']
})
export class DetailCateComponent implements OnInit {

  constructor(
    private cateService:CategoryService,
    private activatedRoute: ActivatedRoute,
  ) { }
  category:category;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.cateService.DetailCate(param.id).subscribe(data => 
       this.category = data);
    });
  }

}
