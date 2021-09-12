import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { CharacterService } from 'src/app/services/character.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-page-payment',
  templateUrl: './page-payment.component.html',
  styleUrls: ['./page-payment.component.scss']
})
export class PagePaymentComponent implements OnInit {
  public code: string = '';
  public paymentAmountInput: string = '';
  public paymentNameInput: string = '';
  public dummyPayments: any = [];

  constructor(
    private _characterService: CharacterService,
    private _paymentService: PaymentService
  ) { }

  ngOnInit() {
    this._characterService.codeSubject$
      .subscribe(
        res => {
          this.code = res;
        }
      )
    
  }

  public addPayment(): void {
    let newPayment = new Payment();
    newPayment.paymentAmount = parseInt(this.paymentAmountInput);
    newPayment.paymentCode = this.code;
    newPayment.paymentName = this.paymentNameInput;

    this._paymentService.savePayment(newPayment);
    this.paymentAmountInput = "";
    this.paymentNameInput= "";
  }

}
