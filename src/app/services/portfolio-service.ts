import { Injectable } from '@angular/core';
import * as data from './portfolio-data.json';
import { PortFolioItem, FrontEndList, BackEndList } from '../portfolio/portfolio-item/portfolio-item.model';

@Injectable()
export class PortFolioData {
  data: PortFolioItem[];

  constructor() {
    const _data = [].slice.call(data, 0);
    this.data = _data.filter(item => item.hide !== true)
      .sort((a, b) => {
        if (!a.order) return 1;
        if (!b.order) return -1;
        return a.order < b.order ? -1 : 1;
      })
      .map(item => {
        const paragraphs = item.paragraphs.map(({ frontend, list, text, title }) => {
          switch (frontend) {
            case true: return new FrontEndList(list, text);
            case false: return new BackEndList(list, text);
            default: return {title, text};
          }
        });
        const {id, title, mainImage, otherImages, url} = item;

        return {id, title, url, paragraphs,
          mainImage: mainImage ? `/assets/images/${mainImage}` : undefined,
          otherImages: otherImages.map(i => `/assets/images/${i}`)
        }
      });
  }

  getItem(id: string) {
    return this.data.filter(p => p.id === id)[0];
  }
}
