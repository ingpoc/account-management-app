import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { UserAccountsComponent } from './userdetails/useraccounts/useraccounts.component';
import { AccountTransactionComponent } from './userdetails/useraccounts/accounttransaction/accounttransaction.component';
import { CustomerResolverService } from './resolver/customer-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserdetailsComponent,
    UserAccountsComponent,
    AccountTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService, AuthService, CustomerResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
