import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'grid',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./container/layout/layout.module').then(m => m.LayoutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'grid-page'
  }
];

