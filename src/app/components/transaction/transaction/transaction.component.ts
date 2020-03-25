import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../../models/transaction/transaction';
import {TransactionService} from '../../../service/transaction/transaction.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction: Transaction;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

}
