import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'bem-vindo',
    loadComponent: () => import('./bem-vindo/bem-vindo.page').then( m => m.BemVindoPage)
  },
];
