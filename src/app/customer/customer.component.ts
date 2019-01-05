import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  public model: Customer = new Customer(1, "Kalle", "Kula", "123123");

  constructor(private customerService: CustomersService) { }

  public newCustomer() {
    this.model = new Customer(-1, "", "", "");
  }

  public saveCustomer() {
    console.log('Saving customer');
    this.customerService.updatecustomer(this.model);
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
