/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard.component';
import { PortFolioComponent } from './features/portfolio/portfolio.component';
import { routes as childrenRoutes } from './features/portfolio/portfolio.routing'
import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'lazy', loadChildren: './features/lazy/index#LazyModule' },
  { path: 'sync', loadChildren: './features/sync/index#SyncModule?sync=true' },
  { path: 'portfolio', children: childrenRoutes },
  { path: '**', component: NotFound404Component }
];
