import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGridCharactersComponent } from './page-grid-characters.component';
import { GridCharactersModule } from 'src/app/shared/grid-characters/grid-characters.module';

@NgModule({
  imports: [
    CommonModule,
    GridCharactersModule
  ],
  declarations: [PageGridCharactersComponent],
  exports: [PageGridCharactersComponent]
})
export class PageGridCharactersModule { }
