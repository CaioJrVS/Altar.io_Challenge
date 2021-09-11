import { Routes, RouterModule } from '@angular/router';
import { PageGridCharactersComponent } from './page-grid-characters.component';

const routes: Routes = [
  { path: '', component: PageGridCharactersComponent },
];

export const PageGridCharactersRoutes = RouterModule.forChild(routes);
