import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Observable } from 'rxjs';
import {Account} from '../account'
import {ACCOUNTS} from '../mock-accounts'

@Component({
  selector: 'accounts-component',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {


  public accounts : Account[];
  constructor(private accountService: AccountsService) { }


  ngOnInit() {
    this.getAccounts();
  }

  getAccounts(): void {
    //this.accounts = this.accountService.getAccounts();
    this.accounts = ACCOUNTS;
  }

  delete(id : number){
    console.log('Deleting account with id:' + id)
  }
}
