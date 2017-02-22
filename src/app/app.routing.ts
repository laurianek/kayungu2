/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { routes as childrenRoutes } from './features/portfolio/portfolio.routing'
import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', children: childrenRoutes },
  { path: '**', component: NotFound404Component }
];
