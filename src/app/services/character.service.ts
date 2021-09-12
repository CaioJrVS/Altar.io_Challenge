import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharList } from '../models/char-list';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public charactersSubjetct$: BehaviorSubject<string[][]> = new BehaviorSubject<string[][]>([]);
  public codeSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private charList :string[][] = [];

  constructor() { }

  public emitArrayOfCharacters() : void{
    let arrayOfCharacters : string[][] = [];
    let arr: string[] = [];
    for(let i = 0; i < 10; i++){
      arr = [];
      for(let j = 0; j < 10 ; j++){
        arr.push(this.generateRandomCharacter());
      }
      arrayOfCharacters.push(arr);
    }
    this.charactersSubjetct$.next(arrayOfCharacters);
    this.charList = arrayOfCharacters;
    this.generateCode();
  }

  public generateRandomCharacter(): string {
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  private generateCode() : void{
    let actualSeconds = new Date().getSeconds().toString();
    let firstCharParameter = parseInt(actualSeconds[0]);
    let secondCharParameter = parseInt(actualSeconds[1]);
    let firstChar =  this.charList[firstCharParameter][secondCharParameter];
    let secondChar = this.charList[secondCharParameter][firstCharParameter];
    let charCount = [0,0];
    let code = '';
    this.charList.forEach(
      arrOfChar=>{
        arrOfChar.forEach(
          char => {
            if (char === firstChar) {
              charCount[0] += 1;
            }
            if (char === secondChar) {
              charCount[1] += 1;
            }
          }
        )
      }
    )
    if(charCount[0] > 9){
      charCount[0] = this.fitNumber(charCount[0])
    }
    if(charCount[1] > 9){
      charCount[1] = this.fitNumber(charCount[1])
    }
    code = charCount[0].toString() + charCount[1].toString();
    this.codeSubject$.next(code);
  }

  private fitNumber( val : number) : number{
    let dividedNumber = 0;
    for (let i = 2; i <= 11; i++){
      dividedNumber =  val/i;
      if (dividedNumber <= 9 ){
        return Math.floor(dividedNumber);
      }
    }
    return 0;
  }
}
