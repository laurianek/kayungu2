import { Component } from '@angular/core';
import { PortFolioData } from '../../services/portfolio-data';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html'
})

export class PortFolioComponent {
  constructor(private portFolioData: PortFolioData) {

  }
}
