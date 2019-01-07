import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsService } from './accounts.service';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { NgbdModalFocus, NgbdModalConfirm } from './modal-focus';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountsComponent,
    CustomerComponent,
    NgbdModalFocus,
    NgbdModalConfirm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [NgbdModalConfirm],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
