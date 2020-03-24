import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../models/transaction/transaction';
import {TransactionService} from '../../service/transaction/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Input()
  transactions: Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {

    this.transactionService.findAllTransactions().subscribe((transactions => this.transactions = transactions),
      error => console.error('There are an error!', error));
  }

}
