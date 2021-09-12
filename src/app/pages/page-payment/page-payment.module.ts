import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePaymentComponent } from './page-payment.component';
import { PaymentGridModule } from 'src/app/shared/payment-grid/payment-grid.module';

@NgModule({
  imports: [
    CommonModule,
    PaymentGridModule
  ],
  declarations: [PagePaymentComponent]
})
export class PagePaymentModule { }
