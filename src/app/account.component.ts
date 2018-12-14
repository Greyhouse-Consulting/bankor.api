import { Component } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'account-component',
  templateUrl: './account.component.html'
})
export class AccountComponent {
    title = 'Account';
    accountUrl = 'https://localhost:9000/accounts';

    constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]>{
        console.log("Called!")
      return this.http.get<Account[]>(this.accountUrl);
  }
}
