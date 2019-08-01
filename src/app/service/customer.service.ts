import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { AuthService } from './auth.service';
import { Account } from '../model/account.model';

@Injectable()
export class CustomerService {



 /*  customers: Customer[] = [
    new Customer('Gurusharan','Gupta', '367 Fidler Little', 'gurusharan@gmail.com',
    [ new Account('ABCD',50,'Savings','Euro')] ),
    new Customer('Priyanka','Gupta', '367 Fidler Little', 'priyanka@gmail.com',
    [ new Account('ABCD',50,'Savings','Euro')] ),
    new Customer('Rakesh ','Kundu', '367 Fidler Little', 'rakesh@gmail.com',
    [ new Account('ABCD',50,'Savings','Euro')] ),
    new Customer('Mahesh','Pardeshi', '367 Fidler Little', 'mahesh@gmail.com',
    [ new Account('ABCD',50,'Savings','Euro')] ),
    new Customer('Mickel','Joe', '367 Fidler Little', 'mikel@gmail.com',
    [ new Account('ABCD',50,'Savings','Euro')] )
  ]; */

  customers: Customer[] = [];

  constructor() { }

  public fetchCustomers() {
    //this.customers = this.authService.getCustomers();
     return this.customers;
     //return this.customers.slice();
  }

  public fetchCustomerById(index: number){
 return this.customers.slice()[index-1];
  }

  public setCustomers(customers: Customer[]){
    this.customers = customers;

  }

}
