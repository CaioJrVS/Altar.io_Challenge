import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCharactersComponent } from './grid-characters.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [GridCharactersComponent],
  exports: [GridCharactersComponent]
})
export class GridCharactersModule { }
