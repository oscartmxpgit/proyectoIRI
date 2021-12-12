import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected products=[
    {
      id:1,
      name:'Comida para perros',
      description:'Bajo en grasas',
      price:10,
    },
    {
      id:2,
      name:'Comida para gatos',
      description:'Rico en proteínas',
      price:8.7,
    },
    {
      id:3,
      name:'Collar de perro',
      description:'Para todas las edades',
      price:15,
    },
    {
      id:4,
      name:'Hueso para morder',
      description:'para fortalecer los dientes',
      price:5,
    },
    {
      id:5,
      name:'Rascador',
      description:'Juguete para gatos y perros',
      price:19,
    }

  ]

  constructor() { }

  public getProducts(): Array<any>{
    return this.products;
  }

  public getProduct(id: number): any{
    return this.products.find(product => product.id==id);
  }
}
