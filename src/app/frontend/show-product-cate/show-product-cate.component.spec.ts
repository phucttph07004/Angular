import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductCateComponent } from './show-product-cate.component';

describe('ShowProductCateComponent', () => {
  let component: ShowProductCateComponent;
  let fixture: ComponentFixture<ShowProductCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
