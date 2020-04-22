import { Component, OnInit } from '@angular/core';
import { news } from '../../news';
import { NewsServiceService } from '../../services/news-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listnew',
  templateUrl: './listnew.component.html',
  styleUrls: ['./listnew.component.scss']
})
export class ListnewComponent implements OnInit {

  constructor(
    private newtService:NewsServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  page=1;
  pageSize=9;
  ngOnInit(): void {
    this.getNew();
  }

  News:news[];

  getNew(){
    this.newtService.getNew().subscribe(data => {
      this.News = data;
    }, error => {
      
    });
  }

  Delete(id){
    this.newtService.Delete(id).subscribe(()=>{
      return this.getNew();
    });
  }
}
