import { Component } from '@angular/core';
import { PortFolioItem } from './portfolio-item/portfolio-item.model';
import { PortFolioData } from '../services/portfolio-service';
import { MOBILE } from '../services/constants';

@Component({
  selector: 'portfolio',
  styleUrls: ['portfolio.component.css'],
  templateUrl: 'portfolio.component.html'
})
export class PortFolioComponent {
  data: PortFolioItem[];

  constructor(private portFolioData: PortFolioData) {
    this.data = portFolioData.data;
  }

  getNumColumn() {
    if (MOBILE) {
      return 2;
    }
    return 3;
  }
}
