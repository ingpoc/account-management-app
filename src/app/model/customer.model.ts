import { Account } from './account.model';

export class Customer {
    constructor(
      public UUID: string,
      public name: string,
      public surName:string,
      public address: string,
      public email:string,
      public accounts: Account[]){}
  
  }