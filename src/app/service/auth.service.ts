import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { CustomerService } from './customer.service';

@Injectable()
export class AuthService {


    constructor(private http: HttpClient, private customerService: CustomerService) { }

    getCustomers() {

        return this.http.get<Customer[]>('http://localhost:8080/customer')
        .pipe(
            tap(customers => {
              this.customerService.setCustomers(customers);
            }));
    }

}