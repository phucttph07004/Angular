import { Component, OnInit } from '@angular/core';
import { news } from '../../news';
import { NewsServiceService } from '../../services/news-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {

  constructor(
    private newService:NewsServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  News:news;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.newService.DetailNew(param.id).subscribe(data => 
       this.News = data);
    });
  }

}
