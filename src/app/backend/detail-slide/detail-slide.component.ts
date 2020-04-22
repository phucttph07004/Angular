import { Component, OnInit } from '@angular/core';
import { banner } from '../../banner';
import { BannerServiceService } from '../../services/banner-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-slide',
  templateUrl: './detail-slide.component.html',
  styleUrls: ['./detail-slide.component.scss']
})
export class DetailSlideComponent implements OnInit {

  constructor(
    private bannerService:BannerServiceService,
    private activatBanneredRoute: ActivatedRoute,
  ) { }

  Banner:banner
  ngOnInit(): void {
    this.activatBanneredRoute.params.subscribe(param => {
      this.bannerService.DetailBanner(param.id).subscribe(data => 
       this.Banner = data);
    });
  }

}
