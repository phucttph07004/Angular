import { Component, OnInit } from '@angular/core';
import { news } from '../../news';
import { NewsServiceService } from '../../services/news-service.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-edit-new',
  templateUrl: './edit-new.component.html',
  styleUrls: ['./edit-new.component.scss']
})
export class EditNewComponent implements OnInit {

  constructor(
    private newService:NewsServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  News: news;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.newService.DetailNew(param.id).subscribe(data => 
       this.News = data);
    });
  }

  SaveEditProduct(){
    this.newService.EditNew(this.News).subscribe(() => this.router.navigateByUrl('/admin/news'));
  }

}
