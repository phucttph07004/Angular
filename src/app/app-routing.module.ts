import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// home
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { ServiceComponent } from './frontend/service/service.component';
import { DetailComponent } from './frontend/detail/detail.component';
import { NewsComponent } from './frontend/news/news.component';
import { DetailNewsComponent } from './frontend/detail-news/detail-news.component';
import { ProductsComponent } from './frontend/products/products.component';
import { ShowProductCateComponent } from './frontend/show-product-cate/show-product-cate.component';
import { SearchComponent } from './frontend/search/search.component';

// admim
import { AdminComponent } from './backend/admin/admin.component';

import { ListproductComponent } from './backend/listproduct/listproduct.component';
import { DetailProComponent } from './backend/detail-pro/detail-pro.component';
import { EditProComponent } from './backend/edit-pro/edit-pro.component';
import { CreateProComponent } from './backend/create-pro/create-pro.component';

import { ListslideComponent } from './backend/listslide/listslide.component';
import { CreateSlideComponent } from './backend/create-slide/create-slide.component';
import { DetailSlideComponent } from './backend/detail-slide/detail-slide.component';
import { EditSlideComponent } from './backend/edit-slide/edit-slide.component';

import { EditNewComponent } from './backend/edit-new/edit-new.component';
import { CreateNewComponent } from './backend/create-new/create-new.component';
import { DetailNewComponent } from './backend/detail-new/detail-new.component';
import { ListnewComponent } from './backend/listnew/listnew.component';

import { ListcateComponent } from './backend/listcate/listcate.component';
import { DetailCateComponent } from './backend/detail-cate/detail-cate.component';
import { CreateCateComponent } from './backend/create-cate/create-cate.component';
import { EditCateComponent } from './backend/edit-cate/edit-cate.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'contact', component: ContactComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'about', component: AboutComponent},
  { path: 'new', component: NewsComponent},
  { path: 'home/detail/:id', component: DetailComponent},
  { path: 'news/detail/:id', component: DetailNewsComponent},
  { path: 'home', component: HomeComponent,
  children: [
    { path: '', redirectTo: 'shop', pathMatch: 'full'},
    { path: 'shop', component: ProductsComponent},
    { path: 'category/:id', component: ShowProductCateComponent},
    { path: 'shop/search/:search', component: SearchComponent},
  ]
},
  { path: 'admin', component: AdminComponent,
  children: [
    { path: '', redirectTo: 'index', pathMatch: 'full'},
    { path: 'index', component: ListproductComponent},
    { path: 'detail/:id', component: DetailProComponent},
    { path: 'edit/:id', component: EditProComponent},
    { path: 'create-pro', component: CreateProComponent},
    { path: 'banner', component: ListslideComponent},
    { path: 'create-banner', component: CreateSlideComponent},
    { path: 'detail-banner/:id', component: DetailSlideComponent},
    { path: 'edit-banner/:id', component: EditSlideComponent},
    { path: 'news', component: ListnewComponent},
    { path: 'create-new', component: CreateNewComponent},
    { path: 'detail-new/:id', component: DetailNewComponent},
    { path: 'edit-new/:id', component: EditNewComponent},
    { path: 'category', component: ListcateComponent},
    { path: 'detail-cate/:id', component: DetailCateComponent},
    { path: 'edit-cate/:id', component: EditCateComponent},
    { path: 'create-cate', component: CreateCateComponent},
  ]
},
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

