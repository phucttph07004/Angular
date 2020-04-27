import { Component, OnInit } from '@angular/core';
import { category } from '../../category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.scss']
})
export class EditCateComponent implements OnInit {

  constructor(
    private cateService:CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  category:category;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.cateService.DetailCate(param.id).subscribe(data => 
       this.category = data);
    });
  }

  SaveEditCate(){
    this.cateService.EditCate(this.category).subscribe(() => this.router.navigateByUrl('/admin/category'));
  }

}
