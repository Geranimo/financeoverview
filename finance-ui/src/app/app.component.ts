import { Component } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { Transactions } from './Transactions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Where did the money go??';  
  transactions: Transactions[];

  constructor(private transactionService: TransactionsService) { 
  }

  ngOnInit() {
    // this.transactionService.getTransactions().subscribe(tns => this.transactions= tns);
    this.transactionService.getTransactionsFromServer().subscribe(tns => this.transactions = tns);
  }
}
