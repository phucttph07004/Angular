import { Component, OnInit } from '@angular/core';
import { category } from '../../category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listcate',
  templateUrl: './listcate.component.html',
  styleUrls: ['./listcate.component.scss']
})
export class ListcateComponent implements OnInit {

  constructor(
    private cateService:CategoryService,
    private activatedRoute: ActivatedRoute,
  ) { }

  page=1;
  pageSize=9;
  ngOnInit(): void {
    this.getCate();
  }

  Category:category[];

  getCate(){
    this.cateService.getCate().subscribe(data => {
      this.Category = data;
    }, error => {
      
    });
  }

  Delete(id){
    this.cateService.Delete(id).subscribe(()=>{
      return this.getCate();
    });
  }






}
