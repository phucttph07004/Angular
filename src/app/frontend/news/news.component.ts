import { Component, OnInit } from '@angular/core';
import { news } from '../../news';
import { NewsServiceService } from '../../services/news-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private newService:NewsServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.Getnew();
  }
   page=1;
   pageSize=6;
  News:news[];

  Getnew(){
    this.newService.getNew().subscribe(data => {
      this.News = data;
    }, error => {
      
    });
  }


}
