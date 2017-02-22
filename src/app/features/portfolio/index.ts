import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './portfolio.routing';

import { PortFolioItemComponent } from './portfolio-item/portfolio-item.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PortFolioItemComponent
  ]
})
export class PortFolioModule {}
