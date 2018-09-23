import { Injectable } from "@angular/core";
import { Transaction } from "./transaction";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { catchError, map, tap } from "rxjs/operators";
import { headersToString } from "selenium-webdriver/http";

@Injectable()
export class TransactionsService {
  private baseUrl: string = "https://api.sashcodes.com/";
  // private baseUrl: string = " https://bfa4hofn10.execute-api.eu-west-1.amazonaws.com/dev/";
  private transactionsUrl = "transactions/iban/NL32RABO0147457521";
  private tagTransactionsUrl = "transactions/tag";

  constructor(private http: HttpClient) {}

  MOCK_TRANSACTIONS: Transaction[] = [
    {
      Payment: "500.00",
      Date: "2018-02-01",
      UserIban: "NL32RABO0147457521",
      SequenceNumber: 4377,
      BalanceAfter: "+948,55",
      Description: " ",
      NameCounterParty: "S. KANDASAMY SEKAR",
      tag: "rent"
    },
    {
      Payment: "23.00",
      Date: "2018-02-02",
      UserIban: "NL32RABO0147457521",
      SequenceNumber: 4378,
      BalanceAfter: "+925,55",
      Description:
        "Relatienr: 1510053, 2132 RX, 14, Termijnfactuur: 264629278, Periode: februari, BTW: 1.30",
      NameCounterParty: "Nv Pwn Waterleidingbedrijf Noord Holland",
      tag: "rent"
    },
    {
      Payment: "39.62",
      Date: "2018-02-03",
      UserIban: "NL32RABO0147457521",
      SequenceNumber: 4379,
      BalanceAfter: "+885,93",
      Description: "Polisnr.: 27043205 01.02.2018 -01.03.2018",
      NameCounterParty: "Nationale-Nederlanden",
      tag: "rent"
    }
  ];

  getTransactionsFromServer(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl + this.transactionsUrl, {
      params: {
        month: "1",
        year: "2018"
      }
    });
  }

  getUntaggedTransactions(): Observable<Transaction[]> {
    return this.http
      .get<Transaction[]>(
        this.baseUrl + "transactions/untagged/iban/NL32RABO0147457521"
      )
      .pipe(tap(tns => console.log(JSON.stringify(tns))));
  }

  getTransactionsForWindow(
    startDate: string,
    endDate: string
  ): Observable<Transaction[]> {
    const requestHeaders = new HttpHeaders();
    requestHeaders.append('Access-Control-Allow-Origin', '*');
    requestHeaders.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    requestHeaders.append('Access-Control-Allow-Methods', 'GET');

    return this.http.get<Transaction[]>(
      this.baseUrl + "transactions/window/iban/NL32RABO0147457521",
      {
        headers: requestHeaders,
        params: {
          startDate: startDate.toString(),
          endDate: endDate.toString()
        }
      }
    );
  }

  updateTransactionsTag(body: string) {
    console.log("Update transaction" + body);
    this.http.put(this.baseUrl + this.tagTransactionsUrl, body).subscribe(
      data => {
        console.log("OnSuccess" + JSON.stringify(data));
      },
      error => {
        console.log("OnError" + JSON.stringify(error));
      }
    );
  }
}
