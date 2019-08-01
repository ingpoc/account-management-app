import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { AuthService } from '../service/auth.service';
import { CustomerService } from '../service/customer.service';

@Injectable()
export class CustomerResolverService implements Resolve<Customer[]>{

  constructor(private authService: AuthService,private customerService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const customers: Customer[] = this.customerService.fetchCustomers();
    console.log(customers.length);
    
    if (customers.length === 0) {
     // const id = +this.routes.snapshot.params['id'];
      return this.authService.getCustomers();
    } else {
      return customers;
    }
  }

}