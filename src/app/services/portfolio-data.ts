import { Injectable } from '@angular/core';
import * as data from './portfolio-data.json';

@Injectable()
export class PortFolioData {
  constructor() {
    console.log(data);
  }
}

export interface Paragraph {
  title?: string;
  text: string;
}

export class FrontEndList implements Paragraph {
  title = 'Front-end';
  text = 'Technologies used';

  constructor(public list: string[]) {}
}

export interface PortFolioItem {
  title: string;
  mainImage: string;
  otherImages: string[];
  url?: string;
  paragraphs: Paragraph[]
}
