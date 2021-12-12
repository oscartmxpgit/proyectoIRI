import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public form:FormGroup;

  constructor(protected formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      'email': new FormControl('', [Validators.required] ),
      'name': new FormControl(''),
      'lastname': new FormControl(''),
      'address': new FormControl(''),
      'city': new FormControl(''),
      'zipcode': new FormControl(''),
    });

  }

  ngOnInit(): void {
  }

}
