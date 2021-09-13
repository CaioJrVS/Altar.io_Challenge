import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-characters',
  templateUrl: './grid-characters.component.html',
  styleUrls: ['./grid-characters.component.scss']
})
export class GridCharactersComponent implements OnInit {
  @Input() public arrayOfCharacters : string[][] = [];
  @Input() public code : string = '';
  public arrOfChars : string[][] = [[]];
  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 10; i++){
      this.arrayOfCharacters.push()
    }
  }
}
