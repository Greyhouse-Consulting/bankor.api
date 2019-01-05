import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';
import { Account } from '../account'
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  id: number;

  model: Account;

  constructor(private route: ActivatedRoute, private accountService: AccountsService, private transactionService : TransactionsService) { }

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('id');

    this.model = this.accountService.getAccount(this.id); //.subscribe(x => this.model = x);

    this.model.transactions = this.transactionService.getTransactions(this.id);

    console.log('id is now ' + this.id);
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
