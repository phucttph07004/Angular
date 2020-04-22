import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/home/home.component';
import { ProductsComponent } from './frontend/products/products.component';
import { CategoriesComponent } from './frontend/categories/categories.component';
import { SlideComponent } from './frontend/slide/slide.component';
import { AdminComponent } from './backend/admin/admin.component';
import { ListproductComponent } from './backend/listproduct/listproduct.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { AboutComponent } from './frontend/about/about.component';
import { ServiceComponent } from './frontend/service/service.component';
import { DetailComponent } from './frontend/detail/detail.component';
import { DetailProComponent } from './backend/detail-pro/detail-pro.component';
import { EditProComponent } from './backend/edit-pro/edit-pro.component';
import { CreateProComponent } from './backend/create-pro/create-pro.component';
import { NewsComponent } from './frontend/news/news.component';
import { ListslideComponent } from './backend/listslide/listslide.component';
import { CreateSlideComponent } from './backend/create-slide/create-slide.component';
import { DetailSlideComponent } from './backend/detail-slide/detail-slide.component';
import { EditSlideComponent } from './backend/edit-slide/edit-slide.component';
import { EditNewComponent } from './backend/edit-new/edit-new.component';
import { CreateNewComponent } from './backend/create-new/create-new.component';
import { DetailNewComponent } from './backend/detail-new/detail-new.component';
import { ListnewComponent } from './backend/listnew/listnew.component';
import { DetailNewsComponent } from './frontend/detail-news/detail-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    SlideComponent,
    AdminComponent,
    ListproductComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent,
    DetailComponent,
    DetailProComponent,
    EditProComponent,
    CreateProComponent,
    NewsComponent,
    ListslideComponent,
    CreateSlideComponent,
    DetailSlideComponent,
    EditSlideComponent,
    EditNewComponent,
    CreateNewComponent,
    DetailNewComponent,
    ListnewComponent,
    DetailNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
