import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  customers: Customer[];
  authObserver: Observable<Customer[]>;
  constructor(private customerService: CustomerService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.customers = this.customerService.fetchCustomers();

    /* this.authObserver = this.customerService.fetchCustomers();
    this.authObserver.subscribe(resData => {
      this.customers = resData;
      console.log(resData);
    },
      errorMessage => {
        console.log(errorMessage);

      }
    ); */
  }

  toCustomer(index: number) {
    this.router.navigate([index + 1], { relativeTo: this.routes });
  }

}
