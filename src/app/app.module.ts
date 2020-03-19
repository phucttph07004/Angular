import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';


import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    SlideComponent,
    CategoryComponent,
    DetailproductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
