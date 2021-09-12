import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePaymentComponent } from './page-payment.component';
import { PaymentGridModule } from 'src/app/shared/payment-grid/payment-grid.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PaymentGridModule,
    FormsModule
  ],
  declarations: [PagePaymentComponent]
})
export class PagePaymentModule { }
