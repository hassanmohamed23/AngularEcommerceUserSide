import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductBySubComponent } from './view-product-by-sub.component';

describe('ViewProductBySubComponent', () => {
  let component: ViewProductBySubComponent;
  let fixture: ComponentFixture<ViewProductBySubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductBySubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductBySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
