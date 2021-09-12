import { Component, OnInit } from '@angular/core';
import { CharList } from 'src/app/models/char-list';
import { CharacterService } from 'src/app/services/character.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public _characterService : CharacterService
  ) { }

  ngOnInit() {
  }

}
