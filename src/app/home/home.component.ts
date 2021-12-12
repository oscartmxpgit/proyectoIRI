import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/productService/product.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Array<any>;

   constructor(protected ProductService: ProductService) {
     this.products=this.ProductService.getProducts();
   }

  ngOnInit(): void {
  }

}
