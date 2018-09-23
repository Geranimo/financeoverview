import { Component, OnInit } from "@angular/core";
import { MockTransactionsWithoutTag } from "../mock-transactions";
import { Transaction } from "../transaction";
import { PaymentTags } from "../mock-paymentTags";
import { TransactionsService } from "../transactions.service";

@Component({
  selector: "app-tagging",
  templateUrl: "./tagging.component.html",
  styleUrls: ["./tagging.component.css"]
})
export class TaggingComponent implements OnInit {
  transactionWithoutTag: Transaction[];
  selectedTransaction: Transaction;
  exsistingPaymentTypes: Array<String>;

  constructor(private transactionService: TransactionsService) {}

  ngOnInit() {
    this.getPaymentsWithoutType();
    this.exsistingPaymentTypes = PaymentTags;
  }

  getPaymentsWithoutType() {
    this.transactionService.getUntaggedTransactions().subscribe(
      tns => {
        this.transactionWithoutTag = tns;
      },
      () => {}
    );
  }

  onSelect(tns: Transaction) {
    this.selectedTransaction = tns;
  }

  updateTransactionWithType(type: String) {
    const body = JSON.stringify({
      UserIban: this.selectedTransaction.UserIban,
      SequenceNumber: this.selectedTransaction.SequenceNumber.toString(),
      tag: type
    });
    this.transactionService.updateTransactionsTag(body);
  }

  tagPayments(tag: String, tns: Transaction) {
    const body = JSON.stringify({
      UserIban: tns.UserIban,
      SequenceNumber: tns.SequenceNumber.toString(),
      tag: tag
    });
    console.log(body);
    this.transactionService.updateTransactionsTag(body);
  }

  appendTagToTns(tns, purpose) {
    console.log(
      "A transaction was clicked => " + JSON.stringify(tns) + purpose
    );
    this.tagPayments(purpose, tns);
  }

  // updateTagsOnTransactionOfSimilarCounterParty(tns: Transaction, tag: string) {
  //   console.log(
  //     "Selected tag " + tag + " For payment type " + tns.NameCounterParty
  //   );
  //   this.transactions.forEach(data => {
  //     if (data.NameCounterParty === tns.NameCounterParty) {
  //       this.tagPayments(tag, data);
  //     }
  //   });
  // }

  rowSelected(tns: Transaction) {
    this.selectedTransaction = tns;
    console.log(
      "The row with sequence number was selected => " + tns.SequenceNumber
    );
  }

  removeTag(tns: Transaction) {
    console.log("Remove a transaction => " + JSON.stringify(tns));
    this.tagPayments(" ", tns);
  }
}
