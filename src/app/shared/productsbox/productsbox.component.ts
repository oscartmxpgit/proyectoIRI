import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cartService/cart.service';

@Component({
  selector: 'productsbox',
  templateUrl: './productsbox.component.html',
  styleUrls: ['./productsbox.component.scss']
})
export class ProductsboxComponent implements OnInit {

  @Input()
  public product: any;

  constructor(protected cartService: CartService) {
  }

  public addProductToCart(){
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {

  }

}
