import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'bem-vindo',
    loadComponent: () => import('./bem-vindo/bem-vindo.page').then(m => m.BemVindoPage)
  },
  {
    path: 'informe-dados',
    loadComponent: () =>
      import('./informe-dados/informe-dados.page').then((m) => m.InformeDadosPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'badges',
    loadComponent: () =>
      import('./badges/badges.page').then((m) => m.BadgesPage),
  },
];
