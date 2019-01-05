import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from './Constants';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersUrl = Constants.apiRoot + "/customers"; 

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
  }

  public getCustomer(id: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
  }

  public updatecustomer(customer: Customer) : Observable<Object> {

    var postUrl= this.customersUrl + '/' + customer.id;
    console.log('Updating customer on url ' + postUrl);

    return this.http.post(postUrl, customer);
  }
}
