import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PortFolioItem } from './portfolio-item.model';
import { PortFolioData } from '../../services/portfolio-service';

@Component({
  selector: 'portfolio-item',
  styleUrls: ['portfolio-item.component.css'],
  templateUrl: 'portfolio-item.component.html'
})
export class PortFolioItemComponent implements OnInit{
  portfolio: PortFolioItem;

  constructor(private route: ActivatedRoute, private portFolioData: PortFolioData) {}

  ngOnInit(): void {
    this.route.params
      .map((params: Params) => this.portFolioData.getItem(params['id']))
      .subscribe(porFolioItem => {
        this.portfolio = porFolioItem;
      });
    document.body.scrollTop = 0;
  }
}
