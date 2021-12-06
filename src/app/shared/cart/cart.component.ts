import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartService/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  public numberOfItems = 0;

  constructor(protected cartService: CartService) {
    this.cartService.cartSubjet.subscribe((event:any[]) =>{
      this.numberOfItems=this.cartService.getItemsCount();

    });
  }

  ngOnInit(): void {
  }

}
