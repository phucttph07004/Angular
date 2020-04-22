import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListslideComponent } from './listslide.component';

describe('ListslideComponent', () => {
  let component: ListslideComponent;
  let fixture: ComponentFixture<ListslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
