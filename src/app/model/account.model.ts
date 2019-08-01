export class Account {
    constructor(
      public accountId: string,
      public iban: string,
      public balance: number,
      public productType:string,
      public currency:string){}
  
  }