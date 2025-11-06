import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@layout').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@pages').then((m) => m.HomePageComponent),
      },
      {
        path: 'explorar',
        loadComponent: () =>
          import('@pages').then((m) => m.ExplorePageComponent),
      },
    ],
  },
];
