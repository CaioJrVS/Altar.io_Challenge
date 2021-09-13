import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestResult } from '../crosscutting/http-request-result';
import { Url } from '../crosscutting/urls';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentsMade: Payment[] = [];
  public paymentsMadeSubject$: BehaviorSubject<Payment[]> = new BehaviorSubject<Payment[]>([]);

  constructor(
    private readonly _url: Url,
    private readonly _http: HttpClient
  ) { }

  public getPaymentsMade(): Payment[] {
    let payments = this.paymentsMade;
    return payments;
  }

  public savePayment(payment: Payment): void {
    this.paymentsMade.push(payment);
    this.paymentsMadeSubject$.next(this.paymentsMade);
    //Function to save grid to API
    //this.saveGrid(payment.grid);
  }

  private saveGrid(grid: String[][]): void {
    let gridString = this.transformGridToArray(grid);
    this._http.post<HttpRequestResult<Payment>>(this._url.savePayment(), gridString)
      .subscribe(
        res => {
          if (res.StatusCode === 200) {

          } else {
            console.log(res.ErrorMessage);
          }
        }
      )
  }

  private transformGridToArray(grid : String [][]) : string {
    let gridString = '';
    for(let i = 0; i<10 ; i ++ ){
      for(let j = 0; j < 10; j++){
        gridString += grid[i][j];
      }
    }
    return gridString;
  }
}
