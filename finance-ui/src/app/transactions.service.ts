import { Injectable } from '@angular/core';
import {Transactions} from './transactions'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class TransactionsService {
  
  private transactionsUrl = 'transactions/march'

  constructor(private http:HttpClient) { }

  MOCK_TRANSACTIONS: Transactions[] =  [
    {
        "Payment": "500.00",
        "Date": "2018-02-01",
        "UserIban": "NL32RABO0147457521",
        "SequenceNumber": 4377,
        "BalanceAfter": "+948,55",
        "Description": " ",
        "NameCounterParty": "S. KANDASAMY SEKAR"
    },
    {
        "Payment": "23.00",
        "Date": "2018-02-02",
        "UserIban": "NL32RABO0147457521",
        "SequenceNumber": 4378,
        "BalanceAfter": "+925,55",
        "Description": "Relatienr: 1510053, 2132 RX, 14, Termijnfactuur: 264629278, Periode: februari, BTW: 1.30",
        "NameCounterParty": "Nv Pwn Waterleidingbedrijf Noord Holland"
    },
    {
        "Payment": "39.62",
        "Date": "2018-02-03",
        "UserIban": "NL32RABO0147457521",
        "SequenceNumber": 4379,
        "BalanceAfter": "+885,93",
        "Description": "Polisnr.: 27043205 01.02.2018 -01.03.2018",
        "NameCounterParty": "Nationale-Nederlanden"
    }
 ];

  getTransactions(): Observable<Transactions[]> {
    return of (this.MOCK_TRANSACTIONS);
  }

  getTransactionsFromServer(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this.transactionsUrl)
  }
}
