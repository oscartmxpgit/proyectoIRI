import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  protected cart: any[]=[];

  public cartSubjet: Subject<any[]>=new Subject<any[]>();

  constructor() { }

  addToCart(product:any, quantity: number=1){
    this.cart.push({
      product: product,
      quantity: quantity
    });
    this.cartSubjet.next(this.cart);
  }

  getItemsCount(){
    let count=0;
    for (let i=0;i<this.cart.length;i++){
      count+=this.cart[i].quantity;
    }
    return count;
  }
}

