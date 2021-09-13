import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGridCharactersComponent } from './page-grid-characters.component';
import { GridCharactersModule } from '../../shared/grid-characters/grid-characters.module';

@NgModule({
  imports: [
    CommonModule,
    GridCharactersModule
  ],
  declarations: [PageGridCharactersComponent]
})
export class PageGridCharactersModule { }
