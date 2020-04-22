import { Component, OnInit } from '@angular/core';
import { banner } from '../../banner';
import { BannerServiceService } from '../../services/banner-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listslide',
  templateUrl: './listslide.component.html',
  styleUrls: ['./listslide.component.scss']
})
export class ListslideComponent implements OnInit {

  constructor(
    private bannerService:BannerServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.GetBanners();
  }

  banners:banner[];
  page=1;
  pageSize=9;


  GetBanners(){
    this.bannerService.getBanners().subscribe(data => {
      this.banners = data;
    }, error => {
      
    });
}


Delete(id){
  this.bannerService.Delete(id).subscribe(()=>{
    return this.GetBanners();
  });
}







}
