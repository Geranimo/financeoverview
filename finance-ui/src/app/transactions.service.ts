import { Injectable } from '@angular/core';
import { Transaction } from './transaction'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class TransactionsService {

  private transactionsUrl = 'transactions/iban/NL32RABO0147457521'
  private tagTransactionsUrl = 'transactions/tag'

  constructor(private http: HttpClient) { }

  MOCK_TRANSACTIONS: Transaction[] = [
    {
      "Payment": "500.00",
      "Date": "2018-02-01",
      "UserIban": "NL32RABO0147457521",
      "SequenceNumber": 4377,
      "BalanceAfter": "+948,55",
      "Description": " ",
      "NameCounterParty": "S. KANDASAMY SEKAR",
      "tag": "rent"
    },
    {
      "Payment": "23.00",
      "Date": "2018-02-02",
      "UserIban": "NL32RABO0147457521",
      "SequenceNumber": 4378,
      "BalanceAfter": "+925,55",
      "Description": "Relatienr: 1510053, 2132 RX, 14, Termijnfactuur: 264629278, Periode: februari, BTW: 1.30",
      "NameCounterParty": "Nv Pwn Waterleidingbedrijf Noord Holland",
      "tag": "rent"
    },
    {
      "Payment": "39.62",
      "Date": "2018-02-03",
      "UserIban": "NL32RABO0147457521",
      "SequenceNumber": 4379,
      "BalanceAfter": "+885,93",
      "Description": "Polisnr.: 27043205 01.02.2018 -01.03.2018",
      "NameCounterParty": "Nationale-Nederlanden",
      "tag": "rent"
    }
  ];

  getTransactions(): Observable<Transaction[]> {
    return of(this.MOCK_TRANSACTIONS);
  }

  getTransactionsFromServer(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl,
      {
        params: {
          "month": "1", "year": "2018"
        }
      }
    );
  }

  updateTransactionsTag(body:string) {
    console.log("Update transaction"+ body)
     this.http.put(
      this.tagTransactionsUrl, 
      body
    ).subscribe(
      data => {
        console.log("OnSuccess" + JSON.stringify(data));
      },
      error => {
        console.log("OnError" + JSON.stringify(error));
      }
    )
  }
}
