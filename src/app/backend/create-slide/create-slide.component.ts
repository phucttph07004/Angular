import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { banner } from '../../banner';
import { BannerServiceService } from '../../services/banner-service.service';




@Component({
  selector: 'app-create-slide',
  templateUrl: './create-slide.component.html',
  styleUrls: ['./create-slide.component.scss']
})
export class CreateSlideComponent implements OnInit {

  constructor(
    private bannerService:BannerServiceService,
    private Router: Router,
  ) { }
  Banner:banner=new banner()
  ngOnInit(): void {
  }

  addSlide(){
    this.bannerService.addBanner(this.Banner).subscribe(() => this.Router.navigateByUrl('/admin/banner'));
  }

}
