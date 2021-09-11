import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGridCharactersComponent } from './pages/page-grid-characters/page-grid-characters.component';
import { PagePaymentComponent } from './pages/page-payment/page-payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid-page', pathMatch: 'full' },
  { path: 'grid-page', component: PageGridCharactersComponent},
  { path: 'payment-page', component: PagePaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
