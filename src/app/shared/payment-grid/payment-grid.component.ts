import { Component, Input, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-grid',
  templateUrl: './payment-grid.component.html',
  styleUrls: ['./payment-grid.component.scss']
})
export class PaymentGridComponent implements OnInit {
  public paymentsMade : Payment[] = [];

  constructor(
    private _paymentService : PaymentService
  ) { }

  ngOnInit() {
    this._paymentService.paymentsMadeSubject$
      .subscribe(
        res =>{
          this.paymentsMade = res
        }
      )
  }

}
