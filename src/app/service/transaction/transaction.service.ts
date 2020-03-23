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

}
