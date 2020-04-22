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
    { path: '', component: HomeComponent},
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
  ]
},
  { path: '**', component: HomeComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

