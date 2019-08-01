import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserAccountsComponent } from './userdetails/useraccounts/useraccounts.component';
import { AccountTransactionComponent } from './userdetails/useraccounts/accounttransaction/accounttransaction.component';
import { CustomerResolverService } from './resolver/customer-resolver.service';


const routes: Routes = [
  { path: 'customers', component: UserdetailsComponent, resolve: [CustomerResolverService] },
  { path: 'customers/:id', component: UserAccountsComponent, resolve: [CustomerResolverService] },
  { path: 'customers/:id/:accountType', component: AccountTransactionComponent },
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
