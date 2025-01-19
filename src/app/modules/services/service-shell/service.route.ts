import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../service-list/service-list.component').then(m => m.ServiceListComponent) // Asegúrate de usar 'then' para obtener el componente exportado
  },
  {
    path: 'service/:id',
    loadComponent: () => import('../service-detail/service-detail.component').then(m => m.ServiceDetailComponent) // Asegúrate de usar 'then' para obtener el componente exportado
  }
] as Routes;
