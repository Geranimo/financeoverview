import { Component, OnInit } from "@angular/core";
import { TransactionsService } from "../transactions.service";
import { Transaction } from "../transaction";
import { MockTransactions } from "../mock-transactions";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { PaymentTags } from "../mock-paymentTags";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  title = "Monthly budget overview!!";
  amountCredited: number = 0;
  amountDebited: number = 0;
  finalBalance: number = 0;

  fromDate: NgbDateStruct = { year: 2018, month: 2, day: 1 };
  endDate: NgbDateStruct = { year: 2018, month: 2, day: 5 };
  budgetType: string;
  transactions: Array<Transaction> = [];
  selectedTransaction: Transaction;
  tableOrChart: boolean = false;
  paymentPurposes: Array<String> = PaymentTags;

  // Doughnut
  public doughnutChartLabels: Array<string> = [];
  public doughnutChartData: Array<number> = [];
  public doughnutChartType: string = 'doughnut';

  constructor(private transactionService: TransactionsService) { }

  ngOnInit() {
    this.getChartData();
  }

  getChartData(tns: Transaction[]) {
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    for (var i = 0; i < PaymentTags.length; i++) {
      var sumOfTheType = this.transactions.filter(transaction => transaction.tag === PaymentTags[i])
        .map(tns => parseInt(tns.Payment))
        .reduce(this.getSum, 0);
      this.doughnutChartData.push(sumOfTheType);
      this.doughnutChartLabels.push(PaymentTags[i])
    }
  }

  toggleView() {
    this.tableOrChart = !this.tableOrChart;
  }

  getMonthFormatted(month: String) {
    if (month.length < 2) {
      return "0" + month;
    }
    return month;
  }

  getTransactionsForSelectedDates() {
    let startDate =
      this.fromDate.year +
      "-" +
      this.getMonthFormatted(this.fromDate.month.toString()) +
      "-" +
      this.getMonthFormatted(this.fromDate.day.toString());

    let endDate =
      this.endDate.year +
      "-" +
      this.getMonthFormatted(this.endDate.month.toString()) +
      "-" +
      this.getMonthFormatted(this.endDate.day.toString());

    this.transactionService
      .getTransactionsForWindow(startDate, endDate)
      .subscribe(
        tns => {
          this.transactions = tns;
          this.calcualteMonthlySummary(this.transactions);
          this.getChartData(this.transactions)
        },
        () => { }
      );
  }

  calculateBudgetByType(event) {
    console.log("received budget type " + event);
    this.calcualteMonthlySummary(
      this.transactions.filter(transaction => transaction.tag === event)
    );
  }

  getSum = (a, b) => a + b;

  cleanUpTheBudgetType() {
    this.budgetType = "all";
    this.calcualteMonthlySummary(this.transactions);
  }

  calcualteMonthlySummary(tns: Transaction[]): any {
    this.amountDebited = tns
      .filter(debitTransaction => debitTransaction.Payment.includes("-"))
      .map(tns => parseInt(tns.Payment))
      .reduce(this.getSum, 0);
    this.amountCredited = tns
      .filter(creditTransaction => creditTransaction.Payment.includes("+"))
      .map(tns => parseInt(tns.Payment))
      .reduce(this.getSum, 0);
    this.finalBalance = this.amountCredited + this.amountDebited;
  }
}
