import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Account} from './account'

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accountsUrl = 'api/acccounts';  // URL to web api

  constructor(private http: HttpClient) {}

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl)
  }

}

