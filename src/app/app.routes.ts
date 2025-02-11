import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/services/service-shell/service.route'),
  },
  {
    path: '**',
    redirectTo: 'tours'
  }
];
