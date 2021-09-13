import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentGridComponent } from './payment-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaymentGridComponent],
  exports: [PaymentGridComponent]
})
export class PaymentGridModule { }
