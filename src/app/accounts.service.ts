import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account'
import { Constants } from './Constants';
import { ACCOUNTS } from './mock-accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accountsUrl = Constants.apiRoot + "/accounts";  // URL to web api
  private accountUrl = Constants.apiRoot + "/account";  // URL to web api

  constructor(private http: HttpClient) { }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl)
  }

  public getAccount(id : number): Account {
//  public getAccount(id: number):  Observable<Account> {
  //   return this.http.get<Account>(this.accountUrl)

    return ACCOUNTS[id - 1];
  }

}

