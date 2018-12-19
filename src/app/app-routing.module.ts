import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomerComponent } from './customer/customer.component';


const appRoutes: Routes = [
  {
    path: 'account/:id',
    component: AccountComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
