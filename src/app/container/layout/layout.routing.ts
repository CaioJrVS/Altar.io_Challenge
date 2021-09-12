import { Routes, RouterModule } from '@angular/router';
import { PageGridCharactersComponent } from 'src/app/pages/page-grid-characters/page-grid-characters.component';
import { PagePaymentComponent } from 'src/app/pages/page-payment/page-payment.component';

export const LayoutRoutes: Routes = [
  {
    path: 'grid',
    component: PageGridCharactersComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/page-grid-characters/page-grid-characters.module')
          .then(m => m.PageGridCharactersModule)
      }
    ]
  },
  {
    path: 'payment',
    component: PagePaymentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/page-payment/page-payment.module')
          .then(m => m.PagePaymentModule)
      }
    ]
  }
];

