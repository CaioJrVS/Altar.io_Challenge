import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-page-grid-characters',
  templateUrl: './page-grid-characters.component.html',
  styleUrls: ['./page-grid-characters.component.scss']
})
export class PageGridCharactersComponent implements OnInit {
  public generatedCharacters: string[][] = [];
  public generatedCode: string = '';
  private generatingGrid: boolean = false;

  constructor(
    private _characterService: CharacterService
  ) { }

  ngOnInit() {
    this._characterService.charactersSubjetct$
      .subscribe(
        res => {
          this.generatedCharacters = res;
        }
      )
    this._characterService.codeSubject$
      .subscribe(
        res => {
          this.generatedCode = res;
        }
      )
  }

  public generate2dGrid(): void {
    if(!this.generatingGrid){
      this.generatingGrid = true;
      setInterval(this.getCharacters.bind(this), 2000);
    }
  }

  public getCharacters(): void {
    this._characterService.emitArrayOfCharacters();
  }


}
