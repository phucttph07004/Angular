import { Component, OnInit } from '@angular/core';
import { category } from '../../category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cate',
  templateUrl: './create-cate.component.html',
  styleUrls: ['./create-cate.component.scss']
})
export class CreateCateComponent implements OnInit {

  constructor(
    private cateService:CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  category:category=new category()
  SaveEditCate(){
    this.cateService.addCate(this.category).subscribe(() => this.router.navigateByUrl('/admin/category'));
  }

}
