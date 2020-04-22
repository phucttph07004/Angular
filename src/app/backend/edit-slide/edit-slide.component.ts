import { Component, OnInit } from '@angular/core';
import { banner } from '../../banner';
import { BannerServiceService } from '../../services/banner-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-slide',
  templateUrl: './edit-slide.component.html',
  styleUrls: ['./edit-slide.component.scss']
})
export class EditSlideComponent implements OnInit {

  constructor(
    private bannerService:BannerServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  Banner : banner;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.bannerService.DetailBanner(param.id).subscribe(data => 
       this.Banner = data);
    });
  }

  editSlide(){
    this.bannerService.EditBanner(this.Banner).subscribe(() => this.router.navigateByUrl('/admin/banner'));
  }

}
