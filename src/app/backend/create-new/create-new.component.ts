import { Component, OnInit } from '@angular/core';
import { news } from '../../news';
import { NewsServiceService } from '../../services/news-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent implements OnInit {

  constructor(
    private newService:NewsServiceService,
    private Router: Router,
  ) { }

  News:news=new news()
  ngOnInit(): void {
  }

  addNew(){
    this.newService.addNew(this.News).subscribe(() => this.Router.navigateByUrl('/admin/news'));
  }

}
