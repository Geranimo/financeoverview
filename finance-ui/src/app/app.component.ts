import { Component } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { Transactions } from './Transactions';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Where did the money go??';
  transactions: Transactions[];
  chart = [];
  amount: string[] = [];
  date: string[] = [];
  
  constructor(private transactionService: TransactionsService) { 
  }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(tns => {
      this.amount =  tns.map(t => (t.Payment));
      this.date = tns.map(t=> t.Date);
      console.log("Amounts => " + JSON.stringify(this.amount));
    });
    console.log(JSON.stringify(this.transactions));
  }

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: this.amount, label: 'Account A' }
  ];

  chartLabels = this.date;

  onChartClick(event) {
    console.log(event);
  }
}
