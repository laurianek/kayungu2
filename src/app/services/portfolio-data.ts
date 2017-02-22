import { Injectable } from '@angular/core';
import * as data from './portfolio-data.json';

@Injectable()
export class PortFolioData {
  data: PortFolioItem[];

  constructor() {
    const _data = [].slice.call(data, 0);
    this.data = _data.sort((a, b) => {
      if (!a.order) return 1;
      if (!b.order) return -1;
      return a.order < b.order ? -1 : 1;
    }).map(item => {
      const paragraphs = item.paragraphs.map(({ frontend, list, text, title }) => {
        switch (frontend) {
          case true: return new FrontEndList(list, text);
          case false: return new BackEndList(list, text);
          default: return {title, text};
        }
      });
      const {id, title, mainImage, otherImages, url} = item;

      return {id, title, otherImages, url, paragraphs,
        mainImage: `/assets/images/${mainImage}`
      }
    });
  }

  getItem(id: string) {
    return this.data.filter(p => p.id === id)[0];
  }
}

export interface Paragraph {
  title?: string;
  text: string;
}

export class FrontEndList implements Paragraph {
  title = 'Front-end';
  constructor(public list: string[], public text: string = 'Technologies used') {}
}

export class BackEndList implements Paragraph {
  title = 'Backend';
  constructor(public list: string[], public text: string = 'Technologies used') {}
}

export interface PortFolioItem {
  id: string;
  title: string;
  mainImage: string;
  otherImages: string[];
  url?: string;
  paragraphs: Paragraph[]
}
