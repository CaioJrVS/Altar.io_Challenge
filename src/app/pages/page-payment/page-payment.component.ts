import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-page-payment',
  templateUrl: './page-payment.component.html',
  styleUrls: ['./page-payment.component.scss']
})
export class PagePaymentComponent implements OnInit {
  public code : string = '';

  constructor(
    private _characterService : CharacterService
  ) { }

  ngOnInit() {
        this._characterService.codeSubject$
      .subscribe(
        res=>{
          this.code=res;
        }
      )
  }

}
