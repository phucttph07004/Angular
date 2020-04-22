import { Component, OnInit } from '@angular/core';
import { banner } from '../../banner';
import { BannerServiceService } from '../../services/banner-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  constructor(
    private bannerService:BannerServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.GetBanners();
  }

  banners:banner[];
  GetBanners(){
    this.bannerService.getBanners().subscribe(data => {
      this.banners = data;
    }, error => {
      
    });

}
}
