/* tslint:disable: variable-name */
import { Routes } from '@angular/router';
import { PortFolioComponent } from './portfolio.component';
import { PortFolioItemComponent } from './portfolio-item/portfolio-item.component';

export const routes: Routes = [
  {
    path: ':id',
    component: PortFolioItemComponent
  },
  {
    path: '',
    component: PortFolioComponent,
    pathMatch: 'full'
  }
];
