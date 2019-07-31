import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { AuthService } from './auth.service';

@Injectable()
export class CustomerService {



  customers: Customer[] = [
    new Customer('Gurushran Gupta', '367 Fidler Little', 'gurusharan@gmail.com'),
    new Customer('Priyanka Gupta', '367 Fidler Little', 'priyanka@gmail.com'),
    new Customer('Rakesh Kundu', '367 Fidler Little', 'rakesh@gmail.com'),
    new Customer('Mahesh Pardeshi', '367 Fidler Little', 'mahesh@gmail.com'),
    new Customer('Mickel', '367 Fidler Little', 'mahesh@gmail.com')
  ];

  //constructor(private authService: AuthService) { }

  public fetchCustomers() {
    // return this.authService.getCustomers();
    return this.customers.slice();
  }

}
