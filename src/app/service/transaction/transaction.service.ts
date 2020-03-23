import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transaction/transaction';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionsUrl = 'http://localhost:8080/apiTransactions/';

  constructor(private http: HttpClient) {
  }

  public findTransactionById(transactionId: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.transactionsUrl + '/transaction/' + transactionId);
  }

  public findTransactionByUser(): Observable<Transaction> {
    return this.http.get<Transaction>(this.transactionsUrl + '/transaction/user');
  }

  public findTransactionByIProduct(): Observable<Transaction> {
    return this.http.get<Transaction>(this.transactionsUrl + '/transaction/product');
  }

  public createTransaction(transaction: Transaction) {
    return this.http.post<Transaction>(this.transactionsUrl + '/createTransaction', transaction, null);
  }
}
