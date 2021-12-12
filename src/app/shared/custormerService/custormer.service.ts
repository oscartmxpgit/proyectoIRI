import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustormerService {

  protected customer={
    email:'',
    name:'',
    lastname:'',
    address:'',
    city:'',
    zipcode:''
  }

  constructor() { }

  public getCustomer(){
    return this.customer;
  }

  public onSubmit(){
    //console.log(this.form.)
  }
}
