import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { TRANSACTIONS } from './mock-transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  public getTransactions(accountId : number): Transaction[] {

    return TRANSACTIONS;
  }
}
