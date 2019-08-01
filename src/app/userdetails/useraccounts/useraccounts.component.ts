import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-useraccounts',
  templateUrl: './useraccounts.component.html',
  styleUrls: ['./useraccounts.component.css']
})
export class UserAccountsComponent implements OnInit {

  customer: Customer;
  isSavingsAccount = false;
  id: number;

  constructor(private customerService: CustomerService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(
      params => {
        this.id = +params['id'];
        console.log(this.id);
      }
    );
    this.customer = this.customerService.fetchCustomerById(this.id);
    console.log(this.customer);
    for (let account of this.customer.accounts) {
      if (account.productType.toLowerCase() === 'savings') {
          this.isSavingsAccount = true;
          
      }
    }
  }

  toAccount(index: number) {
    const productType = this.customer.accounts[index].productType.toLowerCase();
    this.router.navigate([productType], { relativeTo: this.routes });
  }

  onCreateSavingsAccount(){

  }

}
