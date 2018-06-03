import { Component } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction';
import { ChartsModule } from 'ng2-charts';
import { tokenName } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Where did the money go??';
  // chartData = [];
  // chartLabels = [];
  amountCredited: number = 0;
  amountDebited: number = 0;
  finalBalance: number = 0;
  transactions: Array<Transaction> = [];
  selectedTransaction: string;
  paymentPurposes: Array<String> = 
  ["arts","work", "charity","wi-fi", "mortgage", "mobile", "transport", "groceries", "insurance", "movies", "food", "construction", "atm", "bunq","energy"]

  constructor(private transactionService: TransactionsService) {
  }

  ngOnInit() {
   this.refreshTransactions();
  }

  refreshTransactions() {
    this.transactionService.getTransactionsFromServer().subscribe(
      tns => {
        this.transactions = tns;
        this.calcualteMonthlySummary(this.transactions)
        console.log("Amount credit : " + this.amountCredited + " Amount debited :" + this.amountDebited);
      },
      () => {

      });
  }

  calcualteMonthlySummary(tns: Transaction[]): any {
    var totalDebited = 0;
    var totalCredited = 0;
    this.transactions.forEach((data) => {
      let amount = parseInt(data.Payment);
      if (amount < 0) {
        totalDebited = totalDebited + amount;
      } else {
        totalCredited = totalCredited + amount;
      }
    });
    this.amountCredited = totalCredited;
    this.amountDebited = totalDebited;
    this.finalBalance = this.amountCredited + this.amountDebited;
  }

  tagPayments(tag: String, tns: Transaction) {
    var body = JSON.stringify({ "UserIban": tns.UserIban, "SequenceNumber": tns.SequenceNumber.toString(), "tag": tag });
    console.log(body);
    this.transactionService.updateTransactionsTag(body);
  }

  appendTagToTns(tns, purpose) {
    console.log("A transaction was clicked => " + JSON.stringify(tns) + purpose);
    this.tagPayments(purpose, tns);
    this.refreshTransactions();
  }

  updateTagsOnTransactionOfSimilarCounterParty(tns:Transaction, tag: string) {
    console.log("Selected tag " + tag + " For payment type " + tns.NameCounterParty);
    this.transactions.forEach((data)=>{ 
      if(data.NameCounterParty === tns.NameCounterParty) {
        this.tagPayments(tag, data);
      }
    })
  }

  removeTag(tns: Transaction) {
    console.log("Remove a transaction => " + JSON.stringify(tns));
    this.tagPayments(" ", tns);
    this.refreshTransactions();
  }
}
