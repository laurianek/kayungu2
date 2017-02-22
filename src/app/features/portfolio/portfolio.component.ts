import { Component } from '@angular/core';
import { PortFolioData, PortFolioItem } from '../../services/portfolio-data';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortFolioComponent {
  data: PortFolioItem[];

  constructor(private portFolioData: PortFolioData) {
    this.data = portFolioData.data;
  }

  getLink(id) {
    return `${id}`;
  }
}
