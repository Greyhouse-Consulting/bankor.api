import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  public model: Customer = new Customer(1, "Kalle", "Kula", "123123");

  constructor() { }

  public new(){
    this.model = new Customer(-1, "", "","" );
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
