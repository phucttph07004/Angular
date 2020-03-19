import { Component } from '@angular/core';
import { product } from './product';
import { data } from './FakeProduct';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PT14211';



  //lấy toan bộ dữ liệu
  products=data;
  Delete(id){
    let i=0;
    this.products.map(x=>{
      if(id === x.id){
        this.products.splice(i,1);
      }
      i++;
    })
  }




}
