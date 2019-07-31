import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';

@Injectable()
export class AuthService {


    constructor(private http: HttpClient) { }

    getCustomers() {

        return this.http.get<Customer[]>('http://localhost:8080/customers');
    }

}