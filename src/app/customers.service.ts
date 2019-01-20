import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Constants } from './Constants';
import { Customer } from './customer';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersUrl = Constants.apiRoot + "api/customers"; 

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
  }

  public getCustomer(id: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
  }

  public updatecustomer(customer: Customer) : Observable<Customer> {

    var postUrl = this.customersUrl + '/' + customer.id;

    console.log('Updating customer on url ' + postUrl);

    return this.http.post<Customer>(postUrl, customer, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(error){
    let errorMessage = '';

    console.log('Failed create customer');
    console.log(error);
    return throwError(errorMessage);
  }
}



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
