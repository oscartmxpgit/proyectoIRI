import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/productService/product.service';
import { CartService } from '../shared/cartService/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product:any;
  public cartService:any;

  constructor(protected productService: ProductService, cartService: CartService,
    protected router: ActivatedRoute) {
        this.router.params.subscribe( parameters =>{
          let productId = parameters['productId'];
          this.product=this.productService.getProduct(productId);
        } );
        this.cartService=cartService;
  }

  public addToCart(){
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
  }

}
