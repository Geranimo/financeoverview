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
  chartData = [];
  chartLabels = [];
  constructor(private transactionService: TransactionsService) { 
  }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(tns => {
      this.chartData = [
        { data: tns.map(t => (Number(t.Payment))), label: "Account A" }
      ];
      this.chartLabels = tns.map(t=> t.Date.toLocaleLowerCase());
    });
  }

  chartOptions = {
    responsive: true
  };

  onChartClick(event) {
    console.log(event);
  }
}
