import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsboxComponent } from './productsbox.component';

describe('ProductsboxComponent', () => {
  let component: ProductsboxComponent;
  let fixture: ComponentFixture<ProductsboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
