import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../../models/transaction/transaction';
import {TransactionService} from '../../../service/transaction/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  @Input()
  transactions: Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {

    this.transactionService.findAllTransactions().subscribe((transactions => this.transactions = transactions),
      error => console.error('There are an error!', error));

  }

}
